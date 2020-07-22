package venous.data.aotanime.configuration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class DataSource {

    private static final Logger LOGGER = LoggerFactory.getLogger(DataSource.class);


    @Value("${spring.datasource.driverClassName}")
    private String driverClass;

    @Value("${spring.datasource.username}")
    private String user;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${spring.datasource.url}")
    private String dbUrl;

    @Bean
    public DriverManagerDataSource dataSource() {

        LOGGER.info(" #### Loaded value: {}", driverClass);

        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        dataSource.setDriverClassName(driverClass);
        dataSource.setUsername(user);
        dataSource.setPassword(password);
        dataSource.setUrl(
                dbUrl);

        return dataSource;
    }
}
