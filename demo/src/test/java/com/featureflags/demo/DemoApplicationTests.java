package com.featureflags.demo;

import com.azure.data.appconfiguration.ConfigurationClient;
import com.azure.data.appconfiguration.ConfigurationClientBuilder;
import com.azure.data.appconfiguration.models.ConfigurationSetting;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
		ConfigurationClient configurationClient = new ConfigurationClientBuilder()
				.connectionString("Endpoint=https://dptappconf.azconfig.io;Id=bq32-l1-s0:ci49JiXenHnOXWh0LSX1;Secret=W4kgu1OGzSo80PDxJqUbpZmotCpKYn1MyJ95T3hIVaI=")
				.buildClient();

		ConfigurationSetting x = configurationClient.getConfigurationSetting(".appconfig.featureflag/customizeFeature", "customizeFeature");
		ConfigurationSetting y = configurationClient.getConfigurationSetting(".appconfig.featureflag/nameFeature", "nameFeature");
		ConfigurationSetting z = configurationClient.getConfigurationSetting(".appconfig.featureflag/updateFeature", "updateFeature");

		boolean enabled = JsonPath.parse(x.getValue())
				.read("$['enabled']");

		String a = "asdf";

	}

}
