package venous.data.aotanime.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
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
    @GetMapping("/api/findAllSeason")
    @ResponseBody
    public List<Season> getSeason() {

        List<Season> seasons = repository.findAll();

        for(Season season : seasons){
            LOGGER.info("Title: {}", season.getTitle());
        }
        return seasons;
    }

}
