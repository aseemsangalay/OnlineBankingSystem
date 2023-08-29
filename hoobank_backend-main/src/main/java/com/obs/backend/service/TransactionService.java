package com.obs.backend.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obs.backend.exception.BalanceNotSufficientException;
import com.obs.backend.model.Account;
import com.obs.backend.model.Transaction;
import com.obs.backend.repository.AccountRepository;
import com.obs.backend.repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private AccountRepository accountRepository;
	
	public String updateAccountBalance(Account account, String amount, int flag){
		String balance;
		// flag  = 0 increment and flag = 1 decrement
		if (flag == 0) {
			account.setBalance(String.valueOf(Long.parseLong(account.getBalance()) + Long.parseLong(amount)));
			balance = account.getBalance();
		} else {
			account.setBalance(String.valueOf(Long.parseLong(account.getBalance()) - Long.parseLong(amount)));
			balance = account.getBalance();
		}
		
		return balance;
	}
	
	public Transaction addTransactionService(Transaction newTransaction) throws Exception{
		String amount = newTransaction.getAmount();
		String sender_account_number = newTransaction.getSenderAccNumber();
		String receiver_account_number = newTransaction.getReceiverAccNumber();
		Account senderAccount = accountService.getAccountByIdServiceConfirm(sender_account_number);
		Account receiverAccount = accountService.getAccountByIdServiceConfirm(receiver_account_number);
		
		// Checking for sufficient balance
		if (Long.parseLong(senderAccount.getBalance()) < Long.parseLong(amount)) {
			throw new BalanceNotSufficientException(newTransaction.getSenderAccNumber());
		}
		
		// Clearing account balances
		String sender_bal = updateAccountBalance(senderAccount, amount, 1);
		String receiver_bal = updateAccountBalance(receiverAccount, amount, 0);
		
		// Saving updates balance to accounts
		accountRepository.findById(sender_account_number)
			.map(item -> {
			item.setBalance(sender_bal);
			
			return accountRepository.save(item);
		});
		
		accountRepository.findById(receiver_account_number)
			.map(item -> {
			item.setBalance(receiver_bal);
			
			return accountRepository.save(item);
		});
			
		return transactionRepository.save(newTransaction);
	}
	
	public List<Transaction> getAllTransactionsService(){
		return transactionRepository.findAll();
	}
	
	public Optional<Transaction> getTransactionByIdService(String transaction_id){
		return transactionRepository.findById(transaction_id);
	}
	
	public List<Transaction> getAllTransactionsByAccNumberService(String acc_no){
		List<Transaction> sender_transaction = transactionRepository.findBySenderAccNumber(acc_no);
		List<Transaction> receiver_transaction = transactionRepository.findByReceiverAccNumber(acc_no);
		List<Transaction> all_transaction = Stream.concat(sender_transaction.stream(), receiver_transaction.stream()).collect(Collectors.toList());
		return all_transaction;
	}
	
}
