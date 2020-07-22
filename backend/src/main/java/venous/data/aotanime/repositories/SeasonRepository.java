package venous.data.aotanime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import venous.data.aotanime.model.Season;

import java.util.List;

@Repository
public interface SeasonRepository extends JpaRepository<Season, Long> {
    List<Season> findByTitleIs(String title);

    List<Season> findAllBy();
}