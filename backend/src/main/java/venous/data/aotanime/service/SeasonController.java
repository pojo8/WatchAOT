package venous.data.aotanime.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import venous.data.aotanime.AotAnimeApplication;
import venous.data.aotanime.model.Season;
import venous.data.aotanime.repositories.SeasonRepository;

import java.util.List;



@RestController
public class SeasonController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SeasonController.class);



    @Autowired
    SeasonRepository repository;

    //http://localhost:8080/api/findAllSeason?sid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findAllSeason")
    @ResponseBody
    public List<Season> getSeason() {

        List<Season> seasons = repository.findAll();

        for(Season season : seasons){
            LOGGER.info("Title: {}", season.getTitle());
        }
        return seasons;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/api/findSeasonNear?sid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/findSeasonNear")
    @ResponseBody
    public List<Season> getSeasonNear(@RequestParam Integer sid) {

        List<Season> seasons = repository.findSeasonBySeasonIdBetween(sid - 1, sid +1);

        for(Season season : seasons){
            LOGGER.info("Title: {}", season.getTitle());
        }
        return seasons;
    }

    // Returns the information for season above and below elements
    //http://localhost:8080/api/findSeasonNear?sid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/geSeason")
    @ResponseBody
    public Season getSeason(@RequestParam Integer sid) {

        return repository.findSeasonBySeasonId(sid);
    }

}
