package com.obs.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.obs.backend.model.Payee;

public interface PayeeRepository extends JpaRepository<Payee, String> {

	List<Payee> findBySenderAccNumber(String acc_no);

}

