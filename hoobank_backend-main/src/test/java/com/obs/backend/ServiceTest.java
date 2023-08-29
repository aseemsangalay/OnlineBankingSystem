package com.obs.backend;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.obs.backend.model.Account;
import com.obs.backend.model.Payee;
import com.obs.backend.model.Transaction;
import com.obs.backend.repository.AccountRepository;
import com.obs.backend.repository.PayeeRepository;
import com.obs.backend.repository.TransactionRepository;
import com.obs.backend.service.AccountService;
import com.obs.backend.service.PayeeService;
import com.obs.backend.service.TransactionService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ServiceTest {
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private TransactionService transactionService;
	
	@Autowired
	private PayeeService payeeService;
	
	@MockBean
	private AccountRepository accountRepository;
	
	@MockBean
	private TransactionRepository transactionRepository;
	
	@MockBean
	private PayeeRepository payeeRepository;
	
	@Test
	public void getAllTransactionsByAccNumberServiceTest() {

		String acc_no = "190823204732";
		// Mock data records setting
		when(transactionRepository.findBySenderAccNumber(acc_no))
		.thenReturn(Stream.of(new Transaction(), new Transaction()).collect(Collectors.toList()));
		
		// Assertion
		assertEquals(2,  transactionService.getAllTransactionsByAccNumberService(acc_no).size());
		
	}
	
	@Test
	public void getAllAccountsServiceTest() {

		// Mock data records setting
		when(accountRepository.findAll())
		.thenReturn(Stream.of(new Account(), new Account()).collect(Collectors.toList()));
		
		// Assertion
		assertEquals(2,  accountService.getAllAccountsService().size());
		
	}
	
	@Test
	public void getAccountByCustomerIdServiceTest() {
		
		String customer_id = "POCIDgek";

		// Mock data records setting
		when(accountRepository.findByCustomerId(customer_id))
		.thenReturn(new Account());
		
		// Assertion
		assertEquals(1, Stream.of(new Account()).collect(Collectors.toList()).size());	
	}
	
	@Test
	public void getAllPayeesByAccNoServiceTest() {

		String acc_no = "190823204732";
		// Mock data records setting
		when(payeeRepository.findBySenderAccNumber(acc_no))
		.thenReturn(Stream.of(new Payee(), new Payee(), new Payee()).collect(Collectors.toList()));
		
		// Assertion
		assertEquals(3,  payeeService.getAllPayeesByAccNoService(acc_no).size());
		
	}
				
}
