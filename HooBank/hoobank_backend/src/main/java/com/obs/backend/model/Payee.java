package com.obs.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Payee {
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "payee_id", length=40, nullable = false)
	private String payee_id;
	
	@Column(name = "payee_name", length=40, nullable = false)
	private String payee_name;
	
	@Column(name = "nick_name", length=40)
	private String nick_name;
	
	@Column(name = "senderAccNumber", length=40, nullable = false)
	private String senderAccNumber;
	
	@Column(name = "receiver_acc_number", length=40, nullable = false)
	private String receiver_acc_number;
	
	public String getNick_name() {
		return nick_name;
	}

	public void setNick_name(String nick_name) {
		this.nick_name = nick_name;
	}

	public String getSenderAccNumber() {
		return senderAccNumber;
	}

	public void setSenderAccNumber(String senderAccNumber) {
		this.senderAccNumber = senderAccNumber;
	}

	public String getReceiver_acc_number() {
		return receiver_acc_number;
	}

	public void setReceiver_acc_number(String receiver_acc_number) {
		this.receiver_acc_number = receiver_acc_number;
	}

	@Column(name = "bank_name", length=40, nullable = false)
	private String bank_name;

	public String getPayee_id() {
		return payee_id;
	}

	public void setPayee_id(String payee_id) {
		this.payee_id = payee_id;
	}

	public String getPayee_name() {
		return payee_name;
	}

	public void setPayee_name(String payee_name) {
		this.payee_name = payee_name;
	}

	public String getBank_name() {
		return bank_name;
	}

	public void setBank_name(String bank_name) {
		this.bank_name = bank_name;
	}

}
