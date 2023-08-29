package com.obs.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.obs.backend.model.Account;

public interface AccountRepository extends JpaRepository<Account, String> {

//	Optional<Account> findByCustomerId(String customerId);
	
	Account findByCustomerId(String customerId);
	
	void deleteById(String acc_no);

}
