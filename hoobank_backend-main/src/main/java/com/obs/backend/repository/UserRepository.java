package com.obs.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.obs.backend.model.User;

public interface UserRepository extends JpaRepository<User, String> {

}
