package com.obs.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.obs.backend.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, String> {

	List<Transaction> findBySenderAccNumber(String acc_no);
	
	List<Transaction> findByReceiverAccNumber(String acc_no);

}
