package com.yourcodejourney.api.gateway;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
public class CodeJourneyApiZuulApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeJourneyApiZuulApiGatewayApplication.class, args);
	}
}
