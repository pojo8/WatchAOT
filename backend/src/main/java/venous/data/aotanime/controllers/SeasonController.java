package venous.data.aotanime.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import venous.data.aotanime.models.Season;
import venous.data.aotanime.repositories.EpisodeRepository;
import venous.data.aotanime.repositories.SeasonRepository;

import java.util.List;


@RestController
public class SeasonController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SeasonController.class);


    @Autowired
    SeasonRepository seasonRepository;

    @Autowired
    EpisodeRepository epRepository;

    //http://localhost:8080/api/allSeasons
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/allSeasons")
    @ResponseBody
    public List<Season> getSeason() {
        List<Season> seasons = seasonRepository.findAll();
        for (Season season : seasons) {
            LOGGER.info("Title: {}", season.getTitle());
        }
        return seasons;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/api/seasonNear/1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/seasonNear/{sid}")
    @ResponseBody
    public List<Season> getSeasonNear(@PathVariable String sid) {
        List<Season> seasons = seasonRepository.findSeasonBySeasonIdBetween(Integer.parseInt(sid) - 1, Integer.parseInt(sid) + 1);
        return seasons;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/api/season/1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/season/{sid}")
    @ResponseBody
    public Season getSeason(@PathVariable String sid) {
        return seasonRepository.findSeasonBySeasonId(Integer.parseInt(sid));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/updateSeasonView/{sid}")
    @ResponseBody
    void updateSeasonViews(@PathVariable String sid) {
        // first gets all the views for a season
        Integer views =  epRepository.sumOfViewsBySeasonId(Integer.parseInt(sid));
        seasonRepository.updateSeasonViews(Integer.parseInt(sid), views);
        LOGGER.info("Updated the view count for season id: {} to {} views", sid, views);
    }

}
