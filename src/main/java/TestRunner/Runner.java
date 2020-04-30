package TestRunner;



import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\jithe\\Desktop\\jithu eclipsed\\flipkart-BDD\\src\\main\\java\\features\\login.feature"
 ,glue={"Stepdefinition"},
format= {"pretty","html:test-outout","json:json_output/cucumbr.json","junit:junit_xml/cucumber.xml"},
 dryRun=false,
 strict=true
 //tags= {"~@End2End", "~@SmokeTest","@RegressionTest"}
 )
 

public class Runner {
	
	  private TestNGCucumberRunner testNGCucumberRunner;
		 
	    @BeforeClass(alwaysRun = true)
	  public void setUpClass() throws Exception {
	        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	    }
	 
	    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "feature")
	    public void feature(CucumberFeatureWrapper cucumberFeature) {
	        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	    }
	 
	    @DataProvider
	    public Object[][] feature() {
	        return testNGCucumberRunner.provideFeatures();
	    }
	 
	    @AfterClass(alwaysRun = true)
	    public void tearDownClass() throws Exception {
	        testNGCucumberRunner.finish();
	    }
	}

