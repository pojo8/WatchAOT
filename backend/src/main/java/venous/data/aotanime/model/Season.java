package venous.data.aotanime.model;


import javax.persistence.*;
import java.util.Date;

@Entity(name = "Season")
@Table(name = "season_listings")
public class Season {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seasonId;

    @Column(nullable = false)
    private String title;

//    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date airedDate;

    private String description;

    private int viewed;

    private String thumbnail;


    public Season(){}

    public Season(Integer seasonId, String title, Date airedDate, String description, int viewed, String thumbnail) {
        this.seasonId = seasonId;
        this.title = title;
        this.airedDate = airedDate;
        this.description = description;
        this.viewed = viewed;
        this.thumbnail = thumbnail;
    }

    public Integer getSeasonId() {
        return seasonId;
    }

    public void setSeasonId(Integer seasonId) {
        this.seasonId = seasonId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getAiredDate() {
        return airedDate;
    }

    public void setAiredDate(Date airedDate) {
        this.airedDate = airedDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getViewed() {
        return viewed;
    }

    public void setViewed(int viewed) {
        this.viewed = viewed;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
