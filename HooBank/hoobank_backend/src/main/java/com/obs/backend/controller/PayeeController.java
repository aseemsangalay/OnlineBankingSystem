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

import com.obs.backend.model.Payee;
import com.obs.backend.model.Transaction;
import com.obs.backend.service.PayeeService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PayeeController {
	
	@Autowired
	private PayeeService payeeService;
	
	@PostMapping("/add_payee")
	Payee addPayee(@RequestBody Payee newPayee){
		return payeeService.addPayeeService(newPayee);
	}
	
	@GetMapping("/payees")
	List<Payee> getAllPayees(){
		return payeeService.getAllPayeesService();
	}
	
	@GetMapping("/payee/{payee_id}")
	Optional<Payee> getPayeeById(@PathVariable String payee_id){
		return payeeService.getPayeeByIdService(payee_id);
	}
	
	@GetMapping("/user_payees/{acc_no}")
	List<Payee> getAllPayeesByAccNo(@PathVariable String acc_no){
		return payeeService.getAllPayeesByAccNoService(acc_no);
	}
}
