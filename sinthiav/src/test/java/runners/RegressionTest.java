package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
@CucumberOptions(
        features = {"src/test/resources/features/UserLogin.feature"},
        glue = {"steps", "hooks"},
        tags = "@Login,
        plugin = {
                "pretty",
                "json:test-report/cucumber-reports/CucumberTestReport.json"
        },
        monochrome = true,
         publish = true
)
}