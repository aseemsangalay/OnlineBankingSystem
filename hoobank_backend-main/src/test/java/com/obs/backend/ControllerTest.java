package com.obs.backend;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.obs.backend.model.Account;
import com.obs.backend.model.Payee;
import com.obs.backend.model.Transaction;
import com.obs.backend.service.AccountService;
import com.obs.backend.service.PayeeService;
import com.obs.backend.service.TransactionService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTest {

	AccountService accountServiceMock = Mockito.mock(AccountService.class);
	
	TransactionService transactionServiceMock = Mockito.mock(TransactionService.class);
	
	PayeeService payeeServiceMock = Mockito.mock(PayeeService.class);
	
	@Autowired
	public MockMvc mockMvc;
	
	@Test
	public void getAllAccountsTest() throws Exception {
		Account account = new Account();
		List<Account> accounts = Arrays.asList(account);
		
		when(accountServiceMock.getAllAccountsService()).thenReturn(accounts);
		
		mockMvc.perform(get("http://localhost:8080/api/v1/accounts"))
		    .andExpect(status().isOk())
		    .andExpect(jsonPath("$.[0].account_number", is("180823224742")));
	}
	
	@Test
	public void getTransactionsByAccNumberTest() throws Exception {
		
		String acc_no = "1234567890";
		Transaction transaction = new Transaction();
		List<Transaction> transactions = Arrays.asList(transaction);
		
		when(transactionServiceMock.getAllTransactionsByAccNumberService(acc_no))
		.thenReturn(transactions);
		
		mockMvc.perform(get("http://localhost:8080/api/v1/transactions"))
		    .andExpect(status().isOk())
		    .andExpect(jsonPath("$.[0].amount", is("360")));
	}
	
	@Test
	public void getUserPayeesTest() throws Exception {
		
		String acc_no = "180823224742";
		Payee payee = new Payee();
		List<Payee> payees = Arrays.asList(payee);
		
		when(payeeServiceMock.getAllPayeesByAccNoService(acc_no))
		.thenReturn(payees);
		
		mockMvc.perform(get("http://localhost:8080/api/v1/user_payees/" + acc_no))
		    .andExpect(status().isOk())
		    .andExpect(jsonPath("$.[0].payee_name", is("Astha")));
	}
}
