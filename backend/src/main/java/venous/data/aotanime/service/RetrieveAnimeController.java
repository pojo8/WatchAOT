package venous.data.aotanime.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RetrieveAnimeController {

    //http://localhost:8080/api/getSeason?sid=1
    @GetMapping("/api/getSeason")
    @ResponseBody
    public String getSeason(@RequestParam String sid) {
        return "Hello the Season Id " + sid + "\n";
    }

    //http://localhost:8080/api/getEpisode?eid=1
    @GetMapping("/api/getEpisode")
    @ResponseBody
    public String getEpisode(@RequestParam String eid) {
        return "Hello the Episode Id " + eid + "\n";
    }

    //http://localhost:8080/api/getNext?eid=1
    @GetMapping("/api/getNext")
    @ResponseBody
    public String getNext(@RequestParam String eid) {
        return "Hello the Episodes around Id " + eid + "\n";
    }

}
