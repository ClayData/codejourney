package com.yourcodejourney.api.users.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.yourcodejourney.api.users.service.UsersService;
import com.yourcodejourney.api.users.shared.UserDto;
import com.yourcodejourney.api.users.ui.model.LoginRequestModel;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	private UsersService usersService;
	private Environment environment;
	
	
	public AuthenticationFilter(UsersService usersService, Environment environment, AuthenticationManager authenticationManager) {
		this.usersService = usersService;
		this.environment = environment;
		super.setAuthenticationManager(authenticationManager);
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) throws AuthenticationException{
		try {
			LoginRequestModel creds = new ObjectMapper().readValue(req.getInputStream(), LoginRequestModel.class);
			return getAuthenticationManager().authenticate(
					new UsernamePasswordAuthenticationToken(
							creds.getEmail(),
							creds.getPassword(),
							new ArrayList<>())
					);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, 
											FilterChain chain, Authentication auth) throws IOException, ServletException {
		String userName = ((User) auth.getPrincipal()).getUsername();
		UserDto userDetails = usersService.getUserDetailsByEmail(userName);
		
		String token = Jwts.builder()
                .setSubject(userDetails.getUserId())
                .setExpiration(new Date(System.currentTimeMillis() + Long.parseLong(environment.getProperty("token.expiration_time"))))
                .signWith(SignatureAlgorithm.HS512, environment.getProperty("token.secret") )
                .compact();
	        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
	        res.setHeader("Access-Control-Max-Age", "3600");
	        res.setHeader("Access-control-Expose-Headers", "token");
	        res.setHeader("Access-Control-Allow-Headers", "Authorization, x-xsrf-token, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, " +
	                "Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
		res.addHeader("token", token);
		res.addHeader("userId", userDetails.getUserId());

	}
}

