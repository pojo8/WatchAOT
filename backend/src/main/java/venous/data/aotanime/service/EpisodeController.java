package venous.data.aotanime.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import venous.data.aotanime.model.Episode;
import venous.data.aotanime.repositories.EpisodeRepository;
import venous.data.aotanime.repositories.EpisodeRepository.EpisodesReduced;

import java.util.List;


@RestController
public class EpisodeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(EpisodeController.class);

    @Autowired
    EpisodeRepository epRepository;

    //http://localhost:8080/api/findAllEpisodes
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findAllEpisodes")
    @ResponseBody
    public List<Episode> getEpisodes() {

        List<Episode> episodes = epRepository.findAll();

        for(Episode ep : episodes){
            LOGGER.info("ep info src "+ ep.getSource1());
        }

        return episodes;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findEpisodes")
    @ResponseBody
    public List <EpisodesReduced> findAllEps(){
        List <EpisodesReduced> eps = (List<EpisodesReduced>) epRepository.findAllEpsReduced();

        return eps;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/
    // api/findEpisodeNear
    // ?eid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findEpisodeNear")
    @ResponseBody
    public List<Episode> getEpisodeNear(@RequestParam Integer eid) {

        List<Episode> episodes = epRepository.findEpisodeByEpisodeIdBetween(eid - 5, eid + 5);

        for (Episode ep : episodes) {
            LOGGER.info("Title: {}", ep.getSource1());
        }

        return episodes;
    }

    //http://localhost:8080/
    // api/findEpisodeNear
    // ?eid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findEpisode")
    @ResponseBody
    public Episode getEpisode(@RequestParam Integer eid) {

        return epRepository.findAllByEpisodeId( eid );
    }
}
