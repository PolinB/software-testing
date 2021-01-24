package ru.burtseva.recipes;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.testcontainers.containers.MySQLContainer;
import ru.burtseva.recipes.dao.UserJdbcDao;
import ru.burtseva.recipes.model.User;
import javax.sql.DataSource;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
public class DaoTests {

	public DataSource dataSource() {
		MySQLContainer<?> mysql = new MySQLContainer<>("mysql:5.6.42");
		mysql.start();
		HikariConfig hikariConfig = new HikariConfig();
		hikariConfig.setDriverClassName(mysql.getDriverClassName());
		hikariConfig.setJdbcUrl(mysql.getJdbcUrl());
		hikariConfig.setUsername(mysql.getUsername());
		hikariConfig.setPassword(mysql.getPassword());

		return new HikariDataSource(hikariConfig);
	}
	private final UserJdbcDao userDao = new UserJdbcDao(dataSource());


	@Test
	public void addUser() {
		String login = "login";
		String name = "test";
		int age = 11;
		User user = new User(name, name, login, age);

		boolean checkVal = userDao.addUser(user);
		Assert.assertTrue(checkVal);

		List<User> result = userDao.getUsers(login);
		Assert.assertEquals(1, result.size());
		Assert.assertEquals(name, result.get(0).getFirstName());
	}
}
