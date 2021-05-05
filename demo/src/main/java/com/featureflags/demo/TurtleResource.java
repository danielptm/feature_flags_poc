package com.featureflags.demo;


import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.PostConstruct;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@Path("turtle")
public class TurtleResource {

    private String json;
    private Map<String, String> turtleData = new HashMap<>();

    @PostConstruct
    void setup() throws URISyntaxException, IOException {
        this.json = Files.readAllLines(Paths.get("src/main/resources/featureFlags.json"))
        .stream().collect(Collectors.joining())
        .replace(" ", "");
//        System.out.println(json);
//        this.turtleData.put("name", "daniel");

    }


    @GET
    @Path("features")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getFeatures() {
        String x = this.json;
        return Response.ok(x).build();
    }

    @GET
    @Path("data")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getData() {
        return Response.ok(turtleData).build();
    }

    @GET
    @Path("azure")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAzure() {
        FeatureFlagClient featureFlagClient = new FeatureFlagClient();
        Map<String, Boolean> featureMap = new HashMap<>();
        featureMap.put("customizeFeature", featureFlagClient.getCustomize());
        featureMap.put("nameFeature", featureFlagClient.getName());
        featureMap.put("updateFeature", featureFlagClient.getUpdateFeature());
        return Response.ok(featureMap).build();
    }

    @PUT
    @Path("data/{name}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateData(@PathParam("name")String name ) {
        turtleData.put("name", name);
        return Response.ok(turtleData).build();
    }
}


