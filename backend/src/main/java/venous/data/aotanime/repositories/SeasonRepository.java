package venous.data.aotanime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import venous.data.aotanime.models.Season;

import java.util.List;

@Repository
public interface SeasonRepository extends JpaRepository<Season, Long> {


    List<Season> findSeasonBySeasonIdBetween(Integer prevId, Integer nextId);

    @Query(value = "SELECT title, description, season_id, viewed, thumbnail FROM season_listings", nativeQuery = true)
    List<SeasonReduced> findAllSeasonsReduced();

    Season findSeasonBySeasonId(Integer sid);

    @Transactional     // required for update and delete statements
    @Modifying(clearAutomatically = true)
    @Query( value= "UPDATE season_listings SET viewed = :views WHERE season_id =:sid", nativeQuery = true)
    void updateSeasonViews(Integer sid, Integer views);

    public static interface SeasonReduced {
        String getDescription();
        String getTitle();
        Integer getSeason_Id();
        Integer getViewed();
        String getThumbnail();
    }
}