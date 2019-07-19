package org.cucumber.com.Cucumber65;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionAdactin {
	public  WebDriver driver;
@Given("The user is in Adactin page")
public void the_user_is_in_Adactin_page() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\sreenivasan\\eclipse-workspace\\Cucumber65\\Driver\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("https://www.adactin.com/HotelApp/");
}
@When("User enter and the user clicks the login button {string}, {string}")
public void user_enter_and_the_user_clicks_the_login_button(String Username, String pswd) {
   
	driver.findElement(By.id("username")).sendKeys(Username);   
	driver.findElement(By.id("password")).sendKeys(pswd);   
	driver.findElement(By.id("login")).click();
}
@Then("Message displayed Login Successfully")
public void message_displayed_Login_Successfully() {
	
}


} 
