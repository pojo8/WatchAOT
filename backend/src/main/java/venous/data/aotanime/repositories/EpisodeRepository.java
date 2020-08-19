package venous.data.aotanime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import venous.data.aotanime.models.Episode;

import java.util.List;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Long> {

    List<Episode> findEpisodeByEpisodeIdBetween(Integer prevId, Integer nextId);

    Episode findAllByEpisodeId(Integer eid);

    @Query(value = "SELECT episode_id, episode_title, episode_number, season_id, views FROM aot_episodes order by aired desc", nativeQuery = true)
    List<EpisodesReduced> findAllEpisodesReduced();

    @Query(value = "Select * from aot_episodes order by views desc limit 10", nativeQuery = true)
    List<EpisodesReduced> findTenMostViewedEpisodes();

    @Query(value = "Select * from aot_episodes order by aired desc limit 10;", nativeQuery = true)
    List<EpisodesReduced> findTenRecentEpisodes();

    @Query(value = "Select * from aot_episodes Where season_id = 1 ORDER BY episode_id asc;", nativeQuery = true)
    List<EpisodesReduced> findEpisodeBySeasonId(Integer sid);

    @Transactional     // required for update and delete statements
    @Modifying(clearAutomatically = true)
    @Query( value= "UPDATE aot_episodes SET views = views + 1 WHERE episode_id =:eid", nativeQuery = true)
    void updateEpisodeView(Integer eid);

    // collects all the views for a given season
    @Query( value= "select sum(views) from aot_episodes where season_id =:sid", nativeQuery = true)
    Integer sumOfViewsBySeasonId(int sid);

    public static interface EpisodesReduced {
        Integer getEpisode_Id();
        String getEpisode_Title();
        Integer getEpisode_Number();
        Integer getSeason_Id();
        Integer getViews();
    }

}