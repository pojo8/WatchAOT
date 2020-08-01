package venous.data.aotanime.controllers;

import org.springframework.web.bind.annotation.*;


@RestController
public class RetrieveAnimeController {

    //http://localhost:8080/api/getSeason?sid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getSeason")
    @ResponseBody
    public String getSeason(@RequestParam String sid) {
        return "Hello the Season Id " + sid + "\n";
    }

    //http://localhost:8080/api/getEpisode?eid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getEpisode")
    @ResponseBody
    public String getEpisode(@RequestParam String eid) {
        return "Hello the Episode Id " + eid + "\n";
    }

    //http://localhost:8080/api/getNext?eid=1
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getNext")
    @ResponseBody
    public String getNext(@RequestParam String eid) {
        return "Hello the Episodes around Id " + eid + "\n";
    }
// may not be necessary, can just resend getEpisode request?
}
