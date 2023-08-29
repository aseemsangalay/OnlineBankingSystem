package com.obs.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obs.backend.model.Payee;
import com.obs.backend.repository.PayeeRepository;

@Service
public class PayeeService {
	
	@Autowired
	private PayeeRepository payeeRepository;
	
	public Payee addPayeeService(Payee newPayee){
		return payeeRepository.save(newPayee);
	}
	
	public List<Payee> getAllPayeesService(){
		return payeeRepository.findAll();
	}
	
	public Optional<Payee> getPayeeByIdService(String payee_id){
		return payeeRepository.findById(payee_id);
	}
	
	public List<Payee> getAllPayeesByAccNoService(String acc_no){
		return payeeRepository.findBySenderAccNumber(acc_no);
	}
	
}
