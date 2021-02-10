package com.yourcodejourney.discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class CodeJourneyDiscoveryServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeJourneyDiscoveryServerApplication.class, args);
	}

}
