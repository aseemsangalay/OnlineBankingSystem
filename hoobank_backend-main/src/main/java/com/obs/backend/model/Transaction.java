package com.obs.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Transaction {
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "transaction_id", length=40, nullable = false)
	private String transaction_id;
	
	@Column(name = "senderAccNumber", length=40, nullable = false)
	private String senderAccNumber;
	
	@Column(name = "receiverAccNumber", length=40, nullable = false)
	private String receiverAccNumber;
	
	@Column(name = "amount", length=40, nullable = false)
	private String amount;
	
	@Column(name = "transaction_type", length=40, nullable = false)
	private String transaction_type;
	
	@Column(name = "transaction_date", length=40, nullable = false)
	private String transaction_date;
	
	@Column(name = "description", length=500)
	private String description;

	public String getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}

	public String getSenderAccNumber() {
		return senderAccNumber;
	}

	public void setSenderAccNumber(String senderAccNumber) {
		this.senderAccNumber = senderAccNumber;
	}

	public String getReceiverAccNumber() {
		return receiverAccNumber;
	}

	public void setReceiverAccNumber(String receiverAccNumber) {
		this.receiverAccNumber = receiverAccNumber;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getTransaction_type() {
		return transaction_type;
	}

	public void setTransaction_type(String transaction_type) {
		this.transaction_type = transaction_type;
	}

	public String getTransaction_date() {
		return transaction_date;
	}

	public void setTransaction_date(String transaction_date) {
		this.transaction_date = transaction_date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
