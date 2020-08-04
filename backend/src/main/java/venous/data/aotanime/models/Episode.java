package venous.data.aotanime.models;

import javax.persistence.*;


@Entity(name= "Episode")
@Table(name = "aot_episodes")
public class Episode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer episodeId;

    @Column(nullable = false)
    private String title;

//    @ForeignKey()
    private Integer seasonId;

    private String source1;

    private String source2;

    private String source3;

    private String source4;

    private String source5;

    private Integer views;
    private String airedDate;

    public Episode(){}

    public Episode(Integer episodeId, String title, Integer seasonId,
                   String source1, String source2, String source3, String source4,
                   String source5, Integer views, String airedDate) {
        this.episodeId = episodeId;
        this.title = title;
        this.seasonId = seasonId;
        this.source1 = source1;
        this.source2 = source2;
        this.source3 = source3;
        this.source4 = source4;
        this.source5 = source5;
        this.views = views;
        this.airedDate = airedDate;
    }

    public Integer getEpisodeId() {
        return episodeId;
    }

    public void setEpisodeId(Integer episodeId) {
        this.episodeId = episodeId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getSeasonId() {
        return seasonId;
    }

    public void setSeasonId(Integer seasonId) {
        this.seasonId = seasonId;
    }

    public String getSource1() {
        return source1;
    }

    public void setSource1(String source1) {
        this.source1 = source1;
    }

    public String getSource2() {
        return source2;
    }

    public void setSource2(String source2) {
        this.source2 = source2;
    }

    public String getSource3() {
        return source3;
    }

    public void setSource3(String source3) {
        this.source3 = source3;
    }

    public String getSource4() {
        return source4;
    }

    public void setSource4(String source4) {
        this.source4 = source4;
    }

    public String getSource5() {
        return source5;
    }

    public void setSource5(String source5) {
        this.source5 = source5;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public String getAiredDate() {
        return airedDate;
    }

    public void setAiredDate(String airedDate) {
        this.airedDate = airedDate;
    }
}