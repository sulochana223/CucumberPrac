package org.cucumber.com.Cucumber65;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\sreenivasan\\eclipse-workspace\\Cucumber65\\Feature", glue = "org.cucumber.com.Cucumber65",plugin={"html:target","json:target\report.json"})
public class TestRunner {

}
