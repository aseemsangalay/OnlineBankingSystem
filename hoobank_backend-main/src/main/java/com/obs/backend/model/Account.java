package com.obs.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Account {
	
	@Id
	@Column(name = "account_number", length=12, nullable = false)
	private String account_number;
	
	@Column(name = "customerId", length=8)
	private String customerId;
	
	@Column(name = "password", length=100)
	private String password;
	
	@Column(name = "registration_date", length=10)
	private String registration_date;
	
	@Column(name = "account_type", length=15, nullable = false)
	private String account_type;
	
	@Column(name = "first_name", length=20, nullable = false)
	private String first_name;
	
	@Column(name = "middle_name", length=20)
	private String middle_name;
	
	@Column(name = "last_name", length=20, nullable = false)
	private String last_name;
	
	@Column(name = "father_name", length=40, nullable = false)
	private String father_name;
	
	@Column(name = "aadhaar", length=16, nullable = false)
	private String aadhaar;
	
	@Column(name = "email", length=40, nullable = false)
	private String email;
	
	@Column(name = "permanent_address", length=1000, nullable = false)
	private String permanent_address;
	
	@Column(name = "residential_address", length=1000, nullable = false)
	private String residential_address;
	
	@Column(name = "mobile_no", length=10, nullable = false)
	private String mobile_no;
	
	@Column(name = "dob", length=12, nullable = false)
	private String dob;
	
	@Column(name = "pan_no", length=10, nullable = false)
	private String pan_no;
	
	@Column(name = "annual_income", length=40, nullable = false)
	private String annual_income;
	
	@Column(name = "occupation", length=30, nullable = false)
	private String occupation;
	
	@Column(name = "agree", length=4, nullable = false)
	private String agree;
	
	@Column(name = "balance", length=40, nullable = false)
	private String balance;
	
	@Column(name = "is_locked", length=5, nullable = false)
	private String is_locked;
	
	@Column(name = "opening_date", length=10, nullable = false)
	private String opening_date;
	

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRegistration_date() {
		return registration_date;
	}

	public void setRegistration_date(String registration_date) {
		this.registration_date = registration_date;
	}

	public String getAccount_number() {
		return account_number;
	}

	public void setAccount_number(String account_number) {
		this.account_number = account_number;
	}

	public String getAccount_type() {
		return account_type;
	}

	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getMiddle_name() {
		return middle_name;
	}

	public void setMiddle_name(String middle_name) {
		this.middle_name = middle_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getFather_name() {
		return father_name;
	}

	public void setFather_name(String father_name) {
		this.father_name = father_name;
	}

	public String getAadhaar() {
		return aadhaar;
	}

	public void setAadhaar(String aadhaar) {
		this.aadhaar = aadhaar;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPermanent_address() {
		return permanent_address;
	}

	public void setPermanent_address(String permanent_address) {
		this.permanent_address = permanent_address;
	}

	public String getResidential_address() {
		return residential_address;
	}

	public void setResidential_address(String residential_address) {
		this.residential_address = residential_address;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getPan_no() {
		return pan_no;
	}

	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}

	public String getAnnual_income() {
		return annual_income;
	}

	public void setAnnual_income(String annual_income) {
		this.annual_income = annual_income;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getAgree() {
		return agree;
	}

	public void setAgree(String agree) {
		this.agree = agree;
	}

	public String getBalance() {
		return balance;
	}

	public void setBalance(String balance) {
		this.balance = balance;
	}

	public String getIs_locked() {
		return is_locked;
	}

	public void setIs_locked(String is_locked) {
		this.is_locked = is_locked;
	}

	public String getOpening_date() {
		return opening_date;
	}

	public void setOpening_date(String opening_date) {
		this.opening_date = opening_date;
	}
	
}
