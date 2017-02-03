package com.lxs.hs;

import org.glassfish.jersey.logging.LoggingFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

/**
 * @author akalxs@gmail.com
 */
@ApplicationPath("/services")
@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(LoggingFeature.class);
        packages("com.lxs.hs.service");
    }
}
