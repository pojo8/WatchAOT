package venous.data.aotanime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import venous.data.aotanime.model.Episode;

import javax.persistence.Id;
import java.util.List;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Long> {


    List<Episode> findEpisodeByEpisodeIdBetween(Integer beforeid, Integer idnext);

    Episode findAllByEpisodeId( Integer eid );

    @Query(value = "SELECT episode_id, title, season_id, views FROM aot_episodes", nativeQuery = true)
    List <EpisodesReduced> findAllEpsReduced();

    public static interface EpisodesReduced {
        // using an interface to map tp values
        // they have to have a similar name to field column
        Integer getEpisode_Id();
        String getTitle();
        Integer getSeason_Id();
        Integer getViews();
    }

}