package venous.data.aotanime.models;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "User")
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String user_id;

    private String email;

    private String usernamme;

    private String password_hash;

    private Timestamp password_expiry;

    @Column(name = "reset_pwd")
    private Boolean reset_password;


}
