package ru.burtseva.recipes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import ru.burtseva.recipes.dao.UserDao;
import ru.burtseva.recipes.dao.UserJdbcDao;

import javax.sql.DataSource;

@Configuration
public class JdbcDaoContextConfiguration {
    @Bean
    public UserDao productJdbcDao(DataSource dataSource) {
        return new UserJdbcDao(dataSource);
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.sqlite.JDBC");
        dataSource.setUrl("jdbc:sqlite:recipes.db");
        dataSource.setUsername("");
        dataSource.setPassword("");
        return dataSource;
    }
}
