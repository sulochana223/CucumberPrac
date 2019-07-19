$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sreenivasan/eclipse-workspace/Cucumber65/Feature/task.Feature");
formatter.feature({
  "name": "task",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test login functinality of adactin hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in Adactin page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter and the user clicks the login button \"\u003cUsername\u003e\", \"\u003cpswd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "pswd"
      ]
    },
    {
      "cells": [
        "GreensTech123",
        "Greens@123"
      ]
    },
    {
      "cells": [
        "rubysherly",
        "Ruby@1993"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test login functinality of adactin hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in Adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.the_user_is_in_Adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter and the user clicks the login button \"GreensTech123\", \"Greens@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_enter_and_the_user_clicks_the_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test login functinality of adactin hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in Adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.the_user_is_in_Adactin_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SULOCHANA\u0027, ip: \u0027192.168.43.167\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\SREENI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57851}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: eb7235d22d85d491e3c55d6f8fd52f43\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.cucumber.com.Cucumber65.StepDefinitionAdactin.the_user_is_in_Adactin_page(StepDefinitionAdactin.java:17)\r\n\tat ✽.The user is in Adactin page(C:/Users/sreenivasan/eclipse-workspace/Cucumber65/Feature/task.Feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter and the user clicks the login button \"rubysherly\", \"Ruby@1993\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_enter_and_the_user_clicks_the_login_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});