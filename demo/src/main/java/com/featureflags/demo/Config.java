package com.featureflags.demo;


import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
public class Config extends ResourceConfig {

    public Config() {
        register(TurtleResource.class);
        register(Cors.class);
    }
}
