package com.yourcodejourney.api.tomato.service;

import java.util.List;

import com.yourcodejourney.api.tomato.data.TomatoEntity;
import com.yourcodejourney.api.tomato.shared.TomatoDto;

public interface TomatoesService {
	
	TomatoDto createTomato(TomatoDto tomatoDetails);
	List<TomatoDto> getTomatoesByEmail(String email);
	List<TomatoDto> getAllTomatoes();
}
