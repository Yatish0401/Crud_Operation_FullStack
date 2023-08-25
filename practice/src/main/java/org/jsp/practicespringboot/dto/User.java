package org.jsp.practicespringboot.dto;

public class User {
	private int id ;
	private String name ;
	private long phone ; 
	private String password;
	
	public User() {}
	
	public User(int id, String name, long phone, String password) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.password = password;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
