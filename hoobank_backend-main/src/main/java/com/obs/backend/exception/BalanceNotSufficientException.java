package com.obs.backend.exception;

public class BalanceNotSufficientException extends RuntimeException {
	
	public BalanceNotSufficientException(String acc_no) {
		
		super("Not sufficient balance in your account with Acc Number: " + acc_no);
		
	}
}
