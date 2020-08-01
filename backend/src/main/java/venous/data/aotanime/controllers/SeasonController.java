package venous.data.aotanime.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import venous.data.aotanime.models.Season;
import venous.data.aotanime.repositories.SeasonRepository;

import java.util.List;


@RestController
public class SeasonController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SeasonController.class);


    @Autowired
    SeasonRepository repository;

    //http://localhost:8080/api/allSeasons
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/allSeasons")
    @ResponseBody
    public List<Season> getSeason() {

        List<Season> seasons = repository.findAll();

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

        List<Season> seasons = repository.findSeasonBySeasonIdBetween(Integer.parseInt(sid) - 1, Integer.parseInt(sid) + 1);

        for (Season season : seasons) {
            LOGGER.info("Title: {}", season.getTitle());
        }
        return seasons;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/api/season/1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/season/{sid}")
    @ResponseBody
    public Season getSeason(@PathVariable String sid) {

        return repository.findSeasonBySeasonId(Integer.parseInt(sid));
    }

}
