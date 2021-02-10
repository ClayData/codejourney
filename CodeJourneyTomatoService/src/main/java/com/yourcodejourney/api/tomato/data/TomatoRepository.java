package com.yourcodejourney.api.tomato.data;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface TomatoRepository extends MongoRepository<TomatoEntity, String> {
	
	public List<TomatoEntity> findByUserEmail(String userEmail);
}
