package venous.data.aotanime.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name= "Episode")
@Table(name = "aot_episodes")
public class Episode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer episodeId;

    @Column(nullable = false)
    private String episodeTitle;

    private Integer episodeNumber;

    //    @ForeignKey()
    private Integer seasonId;

    private String source1;

    private String source2;

    private String source3;

    private String source4;

    private String source5;
    private Integer views;
    private String aired;
    private Double ratings;
    private Integer votes;
    private Double score;

}
