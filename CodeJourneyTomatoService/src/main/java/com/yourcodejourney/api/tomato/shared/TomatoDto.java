package com.yourcodejourney.api.tomato.shared;

import java.io.Serializable;
import java.time.LocalDateTime;

public class TomatoDto implements Serializable {
	
	
	private static final long serialVersionUID = 5638589861642996233L;
	private String title;
	private String description;
	private String userEmail;
	private String technology;
	private int time;
	private String day;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	
	
}
