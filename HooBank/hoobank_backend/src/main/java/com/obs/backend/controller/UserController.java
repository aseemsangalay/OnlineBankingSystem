package com.obs.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.obs.backend.service.UserService;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.obs.backend.model.User;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/add_user")
	User addUser(@Valid @RequestBody User newUser){
		return userService.addUserService(newUser);
	}
	
	@PutMapping("/add_user/{user_id}")
	Optional<User> updateUser(@RequestBody User updatedUser, @PathVariable String user_id){
		return userService.updateUserService(updatedUser, user_id);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers(){
		return userService.getAllUsersService();
	}
	
	@GetMapping("/user/{user_id}")
	Optional<User> getUserById(@PathVariable String user_id){
		return userService.getUserByIdService(user_id);
	}
	
}
