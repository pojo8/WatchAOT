package venous.data.aotanime.repositories;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import venous.data.aotanime.model.Season;

import java.util.List;

@Repository
public interface SeasonRepository extends JpaRepository<Season, Long> {


    List<Season> findByTitleIs(String title);

    List<Season> findSeasonBySeasonIdBetween(Integer beforeid, Integer idnext);

    @Query(value = "SELECT title, description, season_id, viewed, thumbnail FROM season_listings", nativeQuery = true)
    List<SeasonReduced> findAllSeasonsReduced();

    Season findSeasonBySeasonId(Integer sid);

    public static interface SeasonReduced {
        // using an interface to map tp values
        // they have to have a similar name to field column
        String getDescription();
        String getTitle();
        Integer getSeason_Id();
        Integer getViewed();
        String getThumbnail();
    }
}