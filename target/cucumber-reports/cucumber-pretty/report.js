$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jithe/Desktop/jithu eclipsed/flipkart-BDD/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "amazon application",
  "description": "",
  "id": "amazon-application",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "### this is login feature.."
    }
  ],
  "line": 3,
  "name": "amazon add to cart Test Scenario",
  "description": "",
  "id": "amazon-application;amazon-add-to-cart-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters product name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on search",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user add to carts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user go to payment section",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 14477782000,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.title_of_login_page()"
});
formatter.result({
  "duration": 5430100,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_enters_product_name()"
});
formatter.result({
  "duration": 2131899900,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_clicks_on_search()"
});
formatter.result({
  "duration": 4370698300,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_is_on_home_page_of_product()"
});
formatter.result({
  "duration": 7000322800,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_add_to_carts()"
});
formatter.result({
  "duration": 9430347000,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_go_to_payment_section()"
});
formatter.result({
  "duration": 14007300,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 11038800,
  "status": "passed"
});
});