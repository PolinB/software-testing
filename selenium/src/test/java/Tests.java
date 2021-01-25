import org.junit.jupiter.api.Test;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

public class Tests {
    @Test
    public void welcome() {
        open("http://localhost:3000");
        $("#welcome").shouldHave(text("Welcome to recipe book"));
    }

    @Test
    public void tryLogin() {
        open("http://localhost:3000/login");
        $("input#login").click();
        $("input#login").setValue("login");
        $("#login-submit").click();
        $(".error").shouldHave(text("Wrong login"));
    }

    @Test
    public void register() {
        String login = "polinb";
        String age = "11";
        open("http://localhost:3000/register");
        $("#firstName").click();
        $("#firstName").setValue(login);
        $("#lastName").click();
        $("#lastName").setValue(login);
        $("#login").click();
        $("#login").setValue(login);
        $("#age").click();
        $("#age").setValue(age);
        $("#register-submit").click();
        $("#welcome").shouldHave(text("Welcome to recipe book"));
    }

    @Test
    public void loginAfterRegister() {
        String login = "polinbbb";
        String age = "11";
        open("http://localhost:3000/register");
        $("#firstName").click();
        $("#firstName").setValue(login);
        $("#lastName").click();
        $("#lastName").setValue(login);
        $("#login").click();
        $("#login").setValue(login);
        $("#age").click();
        $("#age").setValue(age);
        $("#register-submit").click();
        $("#welcome").shouldHave(text("Welcome to recipe book"));

        open("http://localhost:3000/login");
        $("input#login").click();
        $("input#login").setValue(login);
        $("#login-submit").click();
        $("#welcome").shouldHave(text("Welcome to recipe book, " + login));
    }
}
