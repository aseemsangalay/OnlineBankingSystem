package com.obs.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.obs.backend.model.Account;
import com.obs.backend.model.JwtRequest;
import com.obs.backend.model.User;
import com.obs.backend.service.AccountService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	
	@PostMapping("/login")
	ResponseEntity<?> login(@RequestBody JwtRequest newJwtRequest) throws Exception{
		return ResponseEntity.ok(accountService.loginService(newJwtRequest));
	}
	
	@PostMapping("/admin_login")
	ResponseEntity<?> adminLogin(@RequestBody JwtRequest newJwtRequest) throws Exception{
		return ResponseEntity.ok(accountService.adminLoginService(newJwtRequest));
	}
	
	@PostMapping("/add_account")
	Account addAccount(@RequestBody Account newAccount){
		return accountService.addAccountService(newAccount);
	}
	
	@PutMapping("/add_account/{account_number}")
	Optional<Account> updateUser(@RequestBody Account updatedAccount, @PathVariable String account_number){
		return accountService.updateAccountService(updatedAccount, account_number);
	}
	
	@PutMapping("/change_password/{customer_id}")
	Account changePassword(@RequestBody Account updatedAccount, @PathVariable String customer_id){
		return accountService.changePasswordService(updatedAccount, customer_id);
	}
	
	@GetMapping("/accounts")
	List<Account> getAllAccounts(){
		return accountService.getAllAccountsService();
	}
	
	@GetMapping("/account/{account_id}")
	Optional<Account> getAccountById(@PathVariable String account_id){
		return accountService.getAccountByIdService(account_id);
	}
	
	@GetMapping("/account_exist/{customerId}")
	Account getAccountByCustomerId(@PathVariable String customerId){
		return accountService.getAccountByCustomerIdService(customerId);
	}
	
	@DeleteMapping("/delete_account/{customerId}")
	void deleteAccountById(@PathVariable String customerId){
		accountService.deleteAccountByIdService(customerId);
	}
	
	@PostMapping("/update_account/{account_number}")
	Account updateAccountById(@RequestBody Account updatedAccount, @PathVariable String account_number){
		return accountService.updateAccountByIdService(updatedAccount, account_number);
	}
	
}
