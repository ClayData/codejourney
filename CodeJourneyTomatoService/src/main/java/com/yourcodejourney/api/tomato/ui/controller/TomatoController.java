package com.yourcodejourney.api.tomato.ui.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yourcodejourney.api.tomato.service.TomatoesService;
import com.yourcodejourney.api.tomato.shared.TomatoDto;
import com.yourcodejourney.api.tomato.ui.model.CreateTomatoRequestModel;
import com.yourcodejourney.api.tomato.ui.model.CreateTomatoResponseModel;
import com.yourcodejourney.api.tomato.ui.model.TomatoResponseModel;

@RestController
@RequestMapping("/tomato")
public class TomatoController {

	@Autowired
	TomatoesService tomatoesService;
	
	@PostMapping
	public ResponseEntity<CreateTomatoResponseModel> createTomato(@Valid @RequestBody CreateTomatoRequestModel tomatoDetails){
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		TomatoDto tomatoDto = modelMapper.map(tomatoDetails, TomatoDto.class);
		
		TomatoDto createdTomato = tomatoesService.createTomato(tomatoDto);
		
		CreateTomatoResponseModel rV = modelMapper.map(createdTomato, CreateTomatoResponseModel.class);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(rV);
	}
	
	@GetMapping(value="/{userEmail}")
	public ResponseEntity<List<TomatoResponseModel>> getTomatoes(@PathVariable("userEmail") String userEmail) {
		List<TomatoDto> tomatoes = tomatoesService.getTomatoesByEmail(userEmail);
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<TomatoResponseModel> resTomatoes = tomatoes.stream().map(tomato -> modelMapper.map(tomato, TomatoResponseModel.class)).collect(Collectors.toList());
		return ResponseEntity.status(HttpStatus.CREATED).body(resTomatoes);
	}
	
	@GetMapping(value="/all")
	public ResponseEntity<List<TomatoResponseModel>> getAllTomatoes() {
		List<TomatoDto> tomatoes = tomatoesService.getAllTomatoes();
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<TomatoResponseModel> resTomatoes = tomatoes.stream().map(tomato -> modelMapper.map(tomato, TomatoResponseModel.class)).collect(Collectors.toList());
		return ResponseEntity.status(HttpStatus.CREATED).body(resTomatoes);
	}
}
