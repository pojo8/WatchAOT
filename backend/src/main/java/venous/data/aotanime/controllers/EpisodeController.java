package venous.data.aotanime.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import venous.data.aotanime.models.Episode;
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
    public List<Episode> findAllEpisodes() {

        List<Episode> episodes = epRepository.findAll();

        for (Episode ep : episodes) {
            LOGGER.info("ep info src " + ep.getSource1());
        }

        return episodes;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findAllEpisodesReduced")
    @ResponseBody
    public List<EpisodesReduced> findAllEpisodesReduced() {
//        List<EpisodesReduced> eps = epRepository.findAllEpisodesReduced();

        return epRepository.findAllEpisodesReduced();
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/
    // api/findEpisodeNear
    // ?eid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findEpisodeNear/{eid}")
    @ResponseBody
    public List<Episode> getEpisodeNear(@PathVariable String eid) {

        List<Episode> episodes = epRepository.findEpisodeByEpisodeIdBetween(Integer.parseInt(eid) - 5, Integer.parseInt(eid) + 5);

        for (Episode ep : episodes) {
            LOGGER.info("Title: {}", ep.getSource1());
            LOGGER.info("Ratings: {}", ep.getRatings());
        }
        return episodes;
    }

    //http://localhost:8080/
    // /api/episode/{eid}
    // ?eid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/episode/{eid}")
    @ResponseBody
    public Episode getEpisode(@PathVariable String eid) {
        //update the views
        epRepository.updateEpisodeView(Integer.parseInt(eid));
        LOGGER.info("Updated the view count for episode id: {} by one views", eid);
        return epRepository.findAllByEpisodeId(Integer.parseInt(eid));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/rate/{eid}/{rating}")
    @ResponseBody
    public Episode updateRating(@PathVariable String rating,@PathVariable String eid) {
        //update the views
        epRepository.updateEpisodeRating(Double.parseDouble(rating),Integer.parseInt(eid));
        LOGGER.info("Updated the Rating for episode id: {} with the following Rating {}", eid, rating);

//        epRepository.updateEpisodeScore(Integer.);
        return epRepository.findAllByEpisodeId(Integer.parseInt(eid));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/episodesSeason/{sid}")
    @ResponseBody
    public List<EpisodesReduced> getEpisodesBySeasonId(@PathVariable String sid) {
        return epRepository.findEpisodeBySeasonId(Integer.parseInt(sid));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getMostViewedEpisodes")
    @ResponseBody
    public List<EpisodesReduced> getMostViewedEpisode() {
        return epRepository.findTenMostViewedEpisodes();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getRecentEpisodes")
    @ResponseBody
    public List<EpisodesReduced> getMostRecentEpisode() {
        return epRepository.findTenRecentEpisodes();
    }

}
