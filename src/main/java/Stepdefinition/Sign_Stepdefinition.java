package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Sign_Stepdefinition {

	
	
	
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
		
	String tittle=	wd.getTitle();
	System.out.println("Titlle of amazon home page is :::"+tittle);
	//Assert.assertEquals("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in", "tittle");
	    
	}

	@Then("^user clicks on sign in options$")
	public void user_clicks_on_sign_in_options()   {
	
	boolean b=	wd.findElement(By.xpath("//*[@id=\"navSwmHoliday\"]/a/img")).isDisplayed();
	System.out.println("tittle of image is ===="+b);
	
	wd.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/span[2]")).click();
	wd.findElement(By.xpath("//*[@id=\"createAccountSubmit\"]")).click();
	   
	}

	@Then("^user enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and_and(String name, String mobile, String email, String pass )   {
		
		wd.findElement(By.name("customerName")).sendKeys(name);
		wd.findElement(By.name("email")).sendKeys(mobile);
		wd.findElement(By.name("secondaryLoginClaim")).sendKeys(email);
		wd.findElement(By.name("password")).sendKeys(pass);

	}

	@Then("^user is on home page of product$")
	public void user_is_on_home_page_of_product()   {
		
	String url=	wd.getCurrentUrl();
	System.out.println("Url of page is :::"+url);
	String titlepage=wd.getTitle();
	System.out.println("tittle of page is :::"+titlepage);

	   
	   
	}

	@Then("^close the browser$")
	public void close_the_browser()   {
		wd.close();
	   
	}

}
