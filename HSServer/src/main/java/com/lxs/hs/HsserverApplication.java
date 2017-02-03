package com.lxs.hs;

import jersey.repackaged.com.google.common.collect.Lists;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HsserverApplication {

    @Bean
    public FilterRegistrationBean corsFilter() {
        CorsFilter cf = new CorsFilter();
        FilterRegistrationBean frb = new FilterRegistrationBean();
        frb.setFilter(cf);
        frb.setUrlPatterns(Lists.newArrayList("/services/*"));
        frb.setOrder(1);
        return frb;
    }

    public static void main(String[] args) {
        SpringApplication.run(HsserverApplication.class, args);
    }
}
