package venous.data.aotanime.models;


import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
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
    private Date aired;

    private String description;

    private int viewed;

    private String thumbnail;

    private Double ratings;

}
