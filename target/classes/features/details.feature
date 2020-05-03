Feature: amazon application
### this is login feature..
Scenario Outline: amazon add to cart Test Scenario

Given user is already on Login Page
When title of login page
Then user clicks on sign in options
Then user enter "<username>" and "<mobileno>" and "<email>" and "<password>"
Then user is on home page of product
Then close the browser


Examples:

    | username      |  mobileno    | password          |  password      | 
	| avali         |  9651458523  | tom@gmail.com	   |  Tom@123 	    | 
	| jithu         |  9997854125  | david@gmail.com   |  David!123 	| 