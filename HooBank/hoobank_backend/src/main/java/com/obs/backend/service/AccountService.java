package com.obs.backend.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.obs.backend.model.Account;
import com.obs.backend.model.JwtRequest;
import com.obs.backend.model.JwtResponse;
import com.obs.backend.model.User;
import com.obs.backend.repository.AccountRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class AccountService {
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
	private String secret = "java";
	
	public JwtResponse loginService(JwtRequest newJwtRequest) throws Exception{
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(newJwtRequest.getCustomerId(), newJwtRequest.getPassword()));
		
		} catch (BadCredentialsException e) {
            e.printStackTrace();
            throw new Exception("Invalid Credentials. Try again!");
        }
		
		Map<String, Object> claims = new HashMap<>();
		
		String jwtToken = Jwts.builder().setClaims(claims).setSubject(newJwtRequest.getCustomerId()).setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
        .signWith(SignatureAlgorithm.HS512, secret).compact();
		
		System.out.println("token = " + jwtToken);
		
		return new JwtResponse(jwtToken);
	}
	
	public JwtResponse adminLoginService(JwtRequest newJwtRequest) throws Exception {

		String admin_username = "admin@hoobank";
		String admin_password = "Admin@123";
		if (newJwtRequest.getCustomerId().equals(admin_username) && newJwtRequest.getPassword().equals(admin_password)) {
			System.out.println("Admin credentials success");
		} else {
//			e.printStackTrace();
			throw new Exception("Invalid Credentials. Try again!");
		}

		
		Map<String, Object> claims = new HashMap<>();
		Object claim_object = new Object();
		claims.put("hoobank_admin", claim_object);
		
		String jwtToken = Jwts.builder().setSubject(newJwtRequest.getCustomerId())
				.setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
        .signWith(SignatureAlgorithm.HS512, secret)
        .claim("role", "admin").compact();
		
		System.out.println("token = " + jwtToken);
		
		return new JwtResponse(jwtToken);
		
	}
	
	public Account addAccountService(Account newAccount){
		return accountRepository.save(newAccount);
	}
	
	public Optional<Account> updateAccountService(Account updatedAccount, String account_number){
		return accountRepository.findById(account_number)
			.map(item -> {
			item.setPassword(passwordEncoder.encode(updatedAccount.getPassword()));
			item.setCustomerId(updatedAccount.getCustomerId());
			item.setRegistration_date(updatedAccount.getRegistration_date());
			return accountRepository.save(item);
		});
	}
	
	public Account changePasswordService(Account updatedAccount, String customer_id){
		Account account =  accountRepository.findByCustomerId(customer_id);
		account.setPassword(passwordEncoder.encode(updatedAccount.getPassword()));
		return accountRepository.save(account);
	}
	
	public List<Account> getAllAccountsService(){
		return accountRepository.findAll();
	}
	
	public Optional<Account> getAccountByIdService(String account_id){
		return accountRepository.findById(account_id);
	}
	
	public Account getAccountByIdServiceConfirm(String account_id){
		return accountRepository.findById(account_id).orElseThrow();
	}
	
	public Account getAccountByCustomerIdService(String customerId){
		return accountRepository.findByCustomerId(customerId);
	}
	
	public void deleteAccountByIdService(String acc_no){
		accountRepository.deleteById(acc_no);
	}
	
	public Account updateAccountByIdService(Account updatedAccount, String account_number){
		accountRepository.deleteById(account_number);
		return accountRepository.save(updatedAccount);
	}
	
}
