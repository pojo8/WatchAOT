package venous.data.aotanime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import venous.data.aotanime.model.Episode;

import java.util.List;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Long> {


    List<Episode> findByTitleIs(String title);

    List<Episode> findEpisodeByEpisodeIdBetween(Integer beforeid, Integer idnext);

    List<Episode> findAllBy();
}