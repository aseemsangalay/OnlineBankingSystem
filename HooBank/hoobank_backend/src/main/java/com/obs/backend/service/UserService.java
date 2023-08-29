package com.obs.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.obs.backend.model.User;
import com.obs.backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User addUserService(User newUser){
		return userRepository.save(newUser);
	}
	
	public Optional<User> updateUserService(User updatedUser, String user_id){
		return userRepository.findById(user_id)
			.map(item -> {
			item.setAddress(updatedUser.getAddress());
			item.setDob(updatedUser.getDob());
			item.setFirst_name(updatedUser.getFirst_name());
			item.setLast_name(updatedUser.getLast_name());
			item.setMobile_no(updatedUser.getMobile_no());
			return userRepository.save(item);
		});
	}
	
	public List<User> getAllUsersService(){
		return userRepository.findAll();
	}
	
	public Optional<User> getUserByIdService(String user_id){
		return userRepository.findById(user_id);
	}
}
