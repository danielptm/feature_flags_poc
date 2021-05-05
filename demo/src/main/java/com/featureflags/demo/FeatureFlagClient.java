package com.featureflags.demo;

import com.azure.data.appconfiguration.ConfigurationClient;
import com.azure.data.appconfiguration.ConfigurationClientBuilder;
import com.azure.data.appconfiguration.models.ConfigurationSetting;
import com.jayway.jsonpath.JsonPath;

public class FeatureFlagClient {

    boolean customizeFeature;
    boolean nameFeature;
    boolean updateFeature;

    public FeatureFlagClient() {
        ConfigurationClient configurationClient = new ConfigurationClientBuilder()
                .connectionString("<connection string goes here>")
                .buildClient();

        ConfigurationSetting x = configurationClient.getConfigurationSetting(".appconfig.featureflag/customizeFeature", "customizeFeature");
        ConfigurationSetting y = configurationClient.getConfigurationSetting(".appconfig.featureflag/nameFeature", "nameFeature");
        ConfigurationSetting z = configurationClient.getConfigurationSetting(".appconfig.featureflag/updateFeature", "updateFeature");

        customizeFeature = JsonPath.parse(x.getValue())
                .read("['enabled']");

        nameFeature = JsonPath.parse(y.getValue())
                .read("['enabled']");

        updateFeature = JsonPath.parse(z.getValue())
                .read("['enabled']");
    }

    public boolean getCustomize() {
        return this.customizeFeature;
    }

    public boolean getName() {
        return this.nameFeature;
    }

    public boolean getUpdateFeature() {
        return this.updateFeature;
    }

}
