$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jithe/Desktop/jithu eclipsed/flipkart-BDD/src/main/java/features/details.feature");
formatter.feature({
  "line": 1,
  "name": "amazon application",
  "description": "",
  "id": "amazon-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
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
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user clicks on sign in options",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cmobileno\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "amazon-application;amazon-add-to-cart-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "mobileno",
        "password",
        "password"
      ],
      "line": 15,
      "id": "amazon-application;amazon-add-to-cart-test-scenario;;1"
    },
    {
      "cells": [
        "avali",
        "9651458523",
        "tom@gmail.com",
        "Tom@123"
      ],
      "line": 16,
      "id": "amazon-application;amazon-add-to-cart-test-scenario;;2"
    },
    {
      "cells": [
        "jithu",
        "9997854125",
        "david@gmail.com",
        "David!123"
      ],
      "line": 17,
      "id": "amazon-application;amazon-add-to-cart-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "amazon add to cart Test Scenario",
  "description": "",
  "id": "amazon-application;amazon-add-to-cart-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user clicks on sign in options",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter \"avali\" and \"9651458523\" and \"\u003cemail\u003e\" and \"tom@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sign_Stepdefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 15994119600,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.title_of_login_page()"
});
formatter.result({
  "duration": 29141000,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.user_clicks_on_sign_in_options()"
});
formatter.result({
  "duration": 2554031400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avali",
      "offset": 12
    },
    {
      "val": "9651458523",
      "offset": 24
    },
    {
      "val": "\u003cemail\u003e",
      "offset": 41
    },
    {
      "val": "tom@gmail.com",
      "offset": 55
    }
  ],
  "location": "Sign_Stepdefinition.user_enter_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 1128313900,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.user_is_on_home_page_of_product()"
});
formatter.result({
  "duration": 13864200,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 4408897700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "amazon add to cart Test Scenario",
  "description": "",
  "id": "amazon-application;amazon-add-to-cart-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user clicks on sign in options",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter \"jithu\" and \"9997854125\" and \"\u003cemail\u003e\" and \"david@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sign_Stepdefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 15401554600,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.title_of_login_page()"
});
formatter.result({
  "duration": 10281400,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.user_clicks_on_sign_in_options()"
});
formatter.result({
  "duration": 1673867100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jithu",
      "offset": 12
    },
    {
      "val": "9997854125",
      "offset": 24
    },
    {
      "val": "\u003cemail\u003e",
      "offset": 41
    },
    {
      "val": "david@gmail.com",
      "offset": 55
    }
  ],
  "location": "Sign_Stepdefinition.user_enter_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 562279900,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.user_is_on_home_page_of_product()"
});
formatter.result({
  "duration": 11608700,
  "status": "passed"
});
formatter.match({
  "location": "Sign_Stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 4405462500,
  "status": "passed"
});
});