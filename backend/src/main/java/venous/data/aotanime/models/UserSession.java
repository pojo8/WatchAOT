package venous.data.aotanime.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "UserSession")
@Table(name = "user_session")
public class UserSession {

    @Id
    @Column(name = "user_session")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String user_session;

    @Column(name = "user_id")
    private String user_id;

    private Boolean active;
}
