package com.obs.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;


@Entity
public class User {
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "user_id", length=40, nullable = false)
	private String user_id;
	
	@Column(name = "username", length=10, nullable = false)
	private String username;
	
	@Column(name = "password", length=40, nullable = false)
	private String password;
	
	@Email(message = "Enter a valid email address!")
	@Column(name = "email", length=40, nullable = false)
	private String email;
	
	@Column(name = "first_name", length=40)
	private String first_name;
	
	@Column(name = "last_name", length=40)
	private String last_name;
	
	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	@Column(name = "dob", length=10)
	private String dob;
	
	@Size(min = 1, max = 2000, message = "Maximum allowed chracters is 2000")
	@Column(name = "address", length=2000)
	private String address;
	
	@Size(min = 10, max = 14, message = "Mobile number should be 10 digits")
	@Column(name = "mobile_no", length=10)
	private String mobile_no;
	
	@Column(name = "registration_date", length=10, nullable = false)
	private String registration_date;

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getRegistration_date() {
		return registration_date;
	}

	public void setRegistration_date(String registration_date) {
		this.registration_date = registration_date;
	}
	
}
