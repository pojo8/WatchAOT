package venous.data.aotanime.repositories;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import venous.data.aotanime.model.Season;

import java.util.List;

@Repository
public interface SeasonRepository extends JpaRepository<Season, Long> {


    List<Season> findByTitleIs(String title);

    List<Season> findSeasonBySeasonIdBetween(Integer beforeid, Integer idnext);

    List<Season> findAllBy();
}