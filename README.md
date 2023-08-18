# Project Documentation: Online Banking System

## Table of Contents

1. **Introduction**
   - Purpose of the Document
   - Project Overview

2. **System Architecture**
   - Frontend (React)
   - Backend (Spring Boot)
   - Database (MariaDB)

3. **Installation and Setup**
   - Prerequisites
   - Installation Steps

5. **Account Management**
   - User Dashboard
   - Account Creation
   - Internet Banking Registration
   - Account Login & Authentication
   - JWT State Management
   - Account Management
   - Account Recovery

6. **Fund Transfers**
   - Adding Payees
   - Fund Transfer Methods
   - Transaction Validation


7. **Admin Dashboard**
   - Admin Home Page
   - Admin Login
   - JWT State Management
   - Editing & Deleting Acounts

8. **Transaction History**
   - Viewing Transaction History
   - Transaction Details

9. **Page Descriptions**
   - Account Authentication Pages
   - Account Management Pages
   - Fund Transfer Pages
   - Admin Dashboard Pages
   - Transaction History Pages

10. **Troubleshooting**
   - Common Issues and Solutions

11. **Future Enhancements**
   - List of Possible Improvements

12. **Conclusion**
   - Summary of the Project

---

## 1. Introduction

### Purpose of the Document

This document serves as a comprehensive guide to the Online Banking System application, offering detailed information on its features, functionality, and usage instructions for both end-users and administrators.

### Project Overview

Online Banking System is a full-stack web application developed using React for the frontend, Spring Boot for the backend, and MariaDB for the database. It consists of several modules, including User Management, Account Management, Fund Transfers, Admin Dashboard, and Transaction History, each catering to specific user and administrative needs.

---

## 2. System Architecture

### Frontend (React)

The frontend architecture of Online Banking System is built using React, a popular JavaScript library for building user interfaces. It utilizes various components, state management, and routing to create a seamless user experience.

#### Technologies and Libraries Used
- React
- React Router
- LocalStorage (or other state management)
- Axios (or other HTTP fetch)
- nanoid (for short customer ID generation)
- jwt-decode (for JWT authentication)
- Jest (for react component testing)

#### High-level Component Structure
#### Overview of the key components and their roles in the application. 
**React** - 
- Hierarchical representation of the component structure.

### Backend (Spring Boot)

The backend of Online Banking System is powered by Spring Boot, a framework for building Java-based applications. It handles data processing, business logic, and communication with the frontend.

#### Technologies and Libraries Used
- Spring Boot
- Spring Security
- Spring Data JPA
- Maria DB Driver
- Spring Web
- Validator
- JJWT
- JXB-API
- MAVEN
- RESTful APIs


### Database (MariaDB)

The application's data is stored and managed using MariaDB, a relational database management system.

#### Database Schema
- Visual representation of the database schema.
- Explanation of key tables and their relationships.

---

## 3. Installation and Setup

### Prerequisites

Before setting up Online Banking System, ensure you have the following software/tools installed:

- Java Development Kit (JDK)
- Node.js and npm
- MariaDB
- IDE (Integrated Development Environment) of your choice

### Installation Steps

Follow these steps to set up [Project Name] on your local environment:

1. **Clone the Repository:**
   ```
   git clone [repository-url]
   cd [project-directory]
   ```

2. **Backend Setup:**
   - Open the backend project in your IDE.
   - Configure the database connection in `application.properties`.
   - Run the Spring Boot application.

3. **Frontend Setup:**
   - Navigate to the frontend directory: `cd [project-directory]/frontend`
   - Install frontend dependencies: `npm install`
   - Start the development server: `npm start`

4. **Access the Application:**
   Open your web browser and visit `http://localhost:3000` to access [Project Name].

---

## 5. Account Management

### User Registration

New users can register for internet banking using the following steps:

1. Navigate to the registration page.
2. Fill in the required details (Account Number, password, etc.).
3. Submit the registration form.

### User Login and Authentication

Registered users can log in using their credentials:

1. Access the login page.
2. Enter the customer ID and password.
3. Click the "Login" button.
4. Upon successful authentication, the user will be redirected to their dashboard.

### Account Recovery

Users who forget their password, can follow these recovery steps:

2. **Forgot Password:**
   - Click the "Forgot Password" link on the login page.
   - Provide the Customer ID.
   - Verify with OTP and redirect to create new password page.
   - Set a new password and confirm the same.

3. **Account Locked:**
   - If the account is locked due to multiple failed login attempts, the users account can get locked by admin.
   - Visit the branch and get your account unlocked by admin.

### User Dashboard

Once logged in, users are directed to their dashboard, where they can access various account-related features:

1. Account Summary: An overview of their account balances and recent transactions.
2. Account Statement: Detailed view of account transactions within a specified timeframe.
3. Change Password: Option to update the account password.
4. Session Management: View and manage active sessions for enhanced security.

### Account Creation

Users can open a new bank account by following these steps:

1. Click the "Open an Account" button.
2. Provide personal and account-related details.
3. Agree to terms and conditions.
4. Submit the application for review.

## 6. Fund Transfers

### Adding Payees

Before initiating a fund transfer, users must add payees (other users' bank account details) using the "Add Payee" feature:

1. Access the "Add Payee" page.
2. Enter the payee's account details (account number, bank details, etc.).
3. Verify the payee information.
4. Confirm the addition.

### Fund Transfer Methods

Users can transfer funds to other accounts using various methods:

1. NEFT (National Electronic Funds Transfer)
2. IMPS (Immediate Payment Service)
3. RTGS (Real Time Gross Settlement)

### Transaction Validation

Before confirming a fund transfer, users should review the transaction details and confirm the recipient's information.

## 7. Admin Dashboard

### Admin Home Page

Administrators can access a dedicated dashboard to manage user accounts, transactions, and system settings.

### User Management

Admins can perform various tasks related to user management:

1. View Users: List of registered users with key details.
2. Edit User: Modify user details (name, email, etc.).
3. Delete User: Remove a user account from the system.

## 8. Transaction History

### Viewing Transaction History

Users can view their transaction history by accessing the "Transaction History" section:

1. Select the desired account (if applicable).
2. Set the timeframe for the transactions.
3. View a list of transactions with details.

### Transaction Details

Clicking on a specific transaction provides users with detailed information about that transaction:

1. Transaction ID
2. Date and Time
3. Sender and Receiver Details
4. Transaction Amount
5. Status (Pending, Completed, Failed, etc.)

## 9. Page Descriptions

### User Management Pages

- Home Page: Landing page after login.
- Login: User authentication page.
- Open an Account: Account creation form.
- Register for Internet Banking: Instructions for online registration.
- Forgot User ID: Account recovery page for forgotten user IDs.
- Forgot Password: Account recovery page for forgotten passwords.
- Account Locked Page: Information about locked accounts.
- Set New Password: Page for setting a new password after password reset.

### Account Management Pages

- Dashboard: User's main account page.
- Account Statement: Detailed transaction history.
- Summary: Account balance and recent transactions.
- Change Password: Form to update the account password.
- Session Expired: Notification when the session expires.

### Fund Transfer Pages

- Add Payee: Form to add new payees.
- Fund Transfer: Form for initiating fund transfers.

### Admin Dashboard Pages

- Home Page: Admin dashboard landing page.
- User Management: List of registered users with actions.

### Transaction History Pages

- Transaction History: Display of transaction history with filters.

## 10. Troubleshooting

### Common Issues and Solutions

- Troubleshooting steps for login issues.
- Account recovery process for forgotten credentials.
- Steps to address transaction errors.
- Instructions for contacting support.

## 11. Future Enhancements

Consider the following potential improvements for [Project Name]:

- **Multi-factor Authentication:** Enhance security with additional authentication methods.
- **Real-time Notifications:** Notify users about account activities via email or SMS.
- **International Fund Transfers:** Enable cross-border transfers.
- **Enhanced Admin Tools:** Provide more robust user management features for administrators.

## 12. Conclusion

In conclusion, Online Banking System is a comprehensive banking application that offers users a range of functionalities, including user management, account management, fund transfers, and more. With its intuitive interface and robust features, [Project Name] aims to provide a seamless banking experience for both users and administrators.
