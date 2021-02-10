package com.yourcodejourney.api.tomato.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yourcodejourney.api.tomato.data.TomatoEntity;
import com.yourcodejourney.api.tomato.data.TomatoRepository;
import com.yourcodejourney.api.tomato.shared.TomatoDto;

@Service
public class TomatoesServiceImpl implements TomatoesService {

	@Autowired
	TomatoRepository tomatoRepository;
	
	@Override
	public TomatoDto createTomato(TomatoDto tomatoDetails) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		TomatoEntity tomatoEntity = modelMapper.map(tomatoDetails, TomatoEntity.class);
		
		tomatoRepository.insert(tomatoEntity);
		
		TomatoDto returnVal = modelMapper.map(tomatoEntity, TomatoDto.class);
		return returnVal;
	}

	@Override
	public List<TomatoDto> getTomatoesByEmail(String email) {
		List<TomatoEntity> tomatoes = tomatoRepository.findByUserEmail(email);
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<TomatoDto> tomatoDtos = tomatoes.stream().map(tomato -> modelMapper.map(tomato, TomatoDto.class)).collect(Collectors.toList());
		
		return tomatoDtos;
	}

	@Override
	public List<TomatoDto> getAllTomatoes() {
		List<TomatoEntity> tomatoes = tomatoRepository.findAll();
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<TomatoDto> tomatoDtos = tomatoes.stream().map(tomato -> modelMapper.map(tomato, TomatoDto.class)).collect(Collectors.toList());
		
		return tomatoDtos;
	}

}
