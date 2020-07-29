package venous.data.aotanime.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import venous.data.aotanime.model.Episode;

import venous.data.aotanime.model.Season;
import venous.data.aotanime.repositories.EpisodeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class EpisodeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(EpisodeController.class);

    @Autowired
    EpisodeRepository epRepository;

    //http://localhost:8080/api/findAllEpisodes
    @GetMapping("/api/findAllEpisodes")
    @ResponseBody
    public List<Episode> getEpisodes() {

        List<Episode> episodes = epRepository.findAll();

        for(Episode ep : episodes){
            LOGGER.info("Episode Title: {} , Season: {1}", ep.getTitle() , ep.getSeasonId());
            LOGGER.info("ep info src "+ ep.getSource1());
        }

        return episodes;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/
    // api/findEpisodeNear
    // ?eid=1
    @GetMapping("/api/findEpisodeNear")
    @ResponseBody
    public List<Episode> getEpisodeNear(@RequestParam Integer eid) {

        List<Episode> episodes = epRepository.findEpisodeByEpisodeIdBetween(eid - 5, eid +5);

        for(Episode ep : episodes){
            LOGGER.info("Title: {}", ep.getSource1());
        }
        return episodes;
    }
}
