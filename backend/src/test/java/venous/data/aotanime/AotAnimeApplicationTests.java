package venous.data.aotanime;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.Query;
import venous.data.aotanime.models.Season;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;

@SpringBootTest
class AotAnimeApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void retrieveData(){
//        EntityManagerFactory emf = Persistence.createEntityManagerFactory("PERSISTENCE");
//        EntityManager em = emf.createEntityManager();
//        em.getTransaction().begin();
//
//        Season season = em.find(Season.class, 1);
//
//        System.out.println(season.getTitle());
//        System.out.println(season.getSeasonId());
//        System.out.println(season.getThumbnail());
//        System.out.println(season.getAiredDate());
//        System.out.println(season.getDescription());
//
//        em.getTransaction().commit();
//        em.close();
    }

}
