package com.obs.backend.model;

public class JwtRequest {
    String customerId;
    String password;

    public JwtRequest() {
    }

    public JwtRequest(String customerId, String password) {

        this.customerId = customerId;
        this.password = password;
    }

    public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "JwtRequest{" +
                "customerId='" + customerId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
