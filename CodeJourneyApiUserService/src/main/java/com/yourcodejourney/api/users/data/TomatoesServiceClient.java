package com.yourcodejourney.api.users.data;

//import java.util.ArrayList;
//import java.util.List;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.cloud.openfeign.FeignClient;
//import org.springframework.stereotype.Component;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//
//import com.yourcodejourney.api.users.ui.model.TomatoResponseModel;
//
//import feign.FeignException;
//import feign.hystrix.FallbackFactory;
//
//@FeignClient(name="tomato-ws", fallbackFactory=TomatoesFallbackFactory.class)
//public interface TomatoesServiceClient {
//	
//	@GetMapping("/users/{userEmail}/tomatoes")
//	public List<TomatoResponseModel> getTomatoes(@PathVariable String userEmail);
//}
//
//@Component
//class TomatoesFallbackFactory implements FallbackFactory<TomatoesServiceClient> {
//	
//	@Override
//	public TomatoesServiceClient create(Throwable cause) {
//		return new TomatoesServiceClientFallback(cause);
//	}
//}
//
//class TomatoesServiceClientFallback implements TomatoesServiceClient {
//	Logger logger = LoggerFactory.getLogger(this.getClass());
//	
//	private final Throwable cause;
//	
//	public TomatoesServiceClientFallback(Throwable cause) {
//		this.cause = cause;
//	}
//	
//	@Override
//	public List<TomatoResponseModel> getTomatoes(String userEmail) {
//		if (cause instanceof FeignException && ((FeignException) cause).status() == 404) {
//			logger.error("404 error took place when getAlbums was called with userId: " + userEmail + ". Error message: "
//					+ cause.getLocalizedMessage());
//		} else {
//			logger.error("Other error took place: " + cause.getLocalizedMessage());
//		}
//		return new ArrayList<>();
//	}
//	
//}