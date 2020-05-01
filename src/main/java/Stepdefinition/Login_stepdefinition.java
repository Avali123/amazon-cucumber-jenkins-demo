package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_stepdefinition {
	
	  WebDriver wd;


	  @Given("^user is already on Login Page$")
	  public void user_is_already_on_Login_Page()   {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\jithe\\Desktop\\avali\\chromedriver_win32\\chromedriver.exe" );
		  wd= new ChromeDriver();
		wd.get("https://www.amazon.in/");
		wd.manage().deleteAllCookies();
		wd.manage().window().maximize();
	   
	}

	  @When("^title of login page$")
	public void title_of_login_page()   {
		
		String tittle=wd.getTitle();
		System.out.println("tiitle od pamazon is ::"+tittle);


	}

	  @Then("^user enters product name$")
	public void user_enters_product_name()   {
		
		wd.findElement(By.id("twotabsearchtextbox")).sendKeys("men shoes");
		wd.findElement(By.xpath("//input[@type='submit']")).click();
	   
	}

	  @Then("^user clicks on search$")
	public void user_clicks_on_search() throws InterruptedException   {
		Thread.sleep(4000);
				WebDriverWait wait1= new WebDriverWait(wd,30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//img[contains(@src,'https://m.media-amazon.com/images/I/812PENrS3JL._AC_UL320_.jpg')]"))).click();
		
	}

	  @Then("^user is on home page of product$")
	public void user_is_on_home_page_of_product() throws InterruptedException   {
		Thread.sleep(3000);
		Thread.sleep(4000);
	}

	  @Then("^user add to carts$")
	public void user_add_to_carts() throws InterruptedException   {
		
		Thread.sleep(6000);
		Actions ac= new Actions(wd);
		Action down=ac.sendKeys(Keys.PAGE_DOWN).build();
		down.perform();
		Thread.sleep(3000);
	   
	}

	  @Then("^user go to payment section$")
	public void user_go_to_payment_section()   {
		
		String payment_Tittle=wd.getTitle();
		System.out.println("titlle is ::"+payment_Tittle);
		
	    
	}

	  @Then("^close the browser$")
	public void close_the_browser()   {
		
		String tittle=wd.getTitle();
		System.out.println(tittle);
	    
	}


}
