package com.yourcodejourney.api.tomato;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.mongodb.client.MongoClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CodeJourneyTomatoServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeJourneyTomatoServiceApplication.class, args);
	}

	
}
