package com.obs.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.obs.backend.model.Transaction;
import com.obs.backend.service.TransactionService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TransactionController {
	
	@Autowired
	private TransactionService transactionService;
	
	@PostMapping("/add_transaction")
	Transaction addTransaction(@RequestBody Transaction newTransaction) throws Exception{
		return transactionService.addTransactionService(newTransaction);
	}
	
	@GetMapping("/transactions")
	List<Transaction> getAllTransactions(){
		return transactionService.getAllTransactionsService();
	}
	
	@GetMapping("/transaction/{transaction_id}")
	Optional<Transaction> getTransactionById(@PathVariable String transaction_id){
		return transactionService.getTransactionByIdService(transaction_id);
	}
	
	@GetMapping("/user_transactions/{acc_no}")
	List<Transaction> getAllTransactionsByUserId(@PathVariable String acc_no){
		return transactionService.getAllTransactionsByAccNumberService(acc_no);
	}
	
}
