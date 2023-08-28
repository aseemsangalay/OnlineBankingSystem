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

11. **Testing**

12. **PWA**

13. **Future Enhancements**
   - List of Possible Improvements

14. **Conclusion**
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
- **React** is a JavaScript library for building user interfaces. It is used to build single-page applications and allows us to create reusable UI components.
- **React Router** is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
- **LocalStorage** is a read-only property of the window interface that allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends.
- **Axios** is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests. It can make XMLHttpRequests from the browser, make http requests from node.js, supports the Promise API, intercept request and response, transform request and response data, cancel requests, and more.
- **nanoid** is a tiny, secure, URL-friendly, unique string ID generator for JavaScript. It uses hardware random generator and can be used in clusters. It uses a larger alphabet than UUID (A-Za-z0-9_-), so ID size was reduced from 36 to 21 symbols.
- **jwt-decode** is a small browser library that helps decoding JWTs token which are Base64Url encoded. However, this library doesn't validate the token; any well-formed JWT can be decoded. You should validate the token in your server-side logic by using something like express-jwt, koa-jwt, Owin Bearer JWT, etc²⁵.
- **Jest** is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node, React, Angular, Vue and more. Jest aims to work out of the box, config-free, on most JavaScript projects. It can make tests which keep track of large objects with ease using snapshots. 

### Backend (Spring Boot)

The backend of Online Banking System is powered by Spring Boot, a framework for building Java-based applications. It handles data processing, business logic, and communication with the frontend.

#### Technologies and Libraries Used
- **Spring Boot:**
   - Spring Boot is a project that is built on the top of the Spring Framework. It provides an easier and faster way to set up, configure, and run both simple and web-based applications. It is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring Framework. It is used to create a stand-alone Spring-based application that you can just run because it needs minimal Spring configuration.

- **Spring Security:**
  - Spring Security is a framework which provides various security features like: authentication, authorization to create secure Java Enterprise Applications. It is a sub-project of Spring framework which was started in 2003 by Ben Alex. Later on, in 2004, It was released under the Apache License as Spring Security 2.0.0. It overcomes all the problems that come during creating non spring security applications and manage new server environment for the application.
   
- **Spring Data JPA:**
  - JPA is a Java specification(Jakarta Persistence API) and it manages relational data in Java applications. To access and persist data between Java object(Plain Old Java object)/ class and relational database, we can use JPA. Upon  Object-Relation Mapping (ORM), it follows the mechanisms. It has the runtime EntityManager API and it is responsible for processing queries and transactions on the Java objects against the database. The main highlight is it uses JPQL (Java Persistent Query Language) which is platform-independent.
    
- **Maria DB Driver:**
  -MariaDB Connector/ODBC is a database driver that uses the industry standard Open Database Connectivity (ODBC) API.

- **Spring Web**: Spring Web is a module of the Spring Framework that provides tools for developing web applications. It includes support for building traditional servlet-based web applications using Spring MVC, as well as reactive web applications using Spring WebFlux.

- **Validator**: A validator is a tool or function that checks if a given input meets certain criteria. Validators can be used to ensure that user input is valid, or to check if data conforms to a specific format. There are many different types of validators, including those for checking HTML markup, string formats, and data types.

- **JJWT**: JJWT (Java JSON Web Token) is a Java library for creating and verifying JSON Web Tokens (JWTs). JWTs are a compact and secure way of transmitting information between parties as a JSON object. JJWT provides an easy-to-use and understand API for working with JWTs on the Java Virtual Machine (JVM) and Android.

- **JAXB-API**: JAXB (Java Architecture for XML Binding) is an API that provides tools for mapping between XML documents and Java objects. It allows developers to work with XML data in a more natural and convenient way by automatically generating Java classes from XML schemas or by using annotations to define the mapping between XML elements and Java classes.

- **MAVEN**: Maven is a software project management and comprehension tool. It uses a Project Object Model (POM) to manage a project's build, dependencies, reporting, and documentation. Maven can automate many aspects of the build process, making it easier to manage complex projects.

- **RESTful APIs**: RESTful APIs are web services that follow the architectural style of Representational State Transfer (REST). REST is an approach to designing APIs that emphasizes simplicity, scalability, and performance. RESTful APIs use standard HTTP methods (such as GET, POST, PUT, DELETE) to perform operations on resources, making them easy to use and understand.

### Database (MariaDB)

The application's data is stored and managed using MariaDB, a relational database management system.

#### Database Schema

  ![UML](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/UML-class.jpg)


- **Transactions** table:
  - `Transaction_id`: Unique identifier for each transaction.
  - `Amount`: The monetary value of the transaction.
  - `Description`: A brief description of the transaction.
  - `Receiver_acc_number`: The account number of the receiver of the transaction.
  - `Sender_acc_number`: The account number of the sender of the transaction.
  - `Transaction_date`: The date on which the transaction occurred.
  - `Transaction_type`: The type of transaction (e.g. deposit, withdrawal, transfer).

- **Payee** table:
  - `Payee_id`: Unique identifier for each payee.
  - `Bank_name`: The name of the bank associated with the payee.
  - `Nick_name`: A nickname for the payee, as specified by the user.
  - `Payee_name`: The name of the payee.
  - `Receiver_acc_number`: The account number of the receiver associated with the payee.
  - `Sender_acc_number`: The account number of the sender associated with the payee.

- **Account** table:
  - `Account_number`: Unique identifier for each account.
  - `First_name`: The first name of the account holder.
  - `Last_name`: The last name of the account holder.
  - `Middle_name`: The middle name of the account holder.
  - `Aadhar_number`: The Aadhar number of the account holder (a unique identification number issued by the Indian government).
  - `PAN_number`: The PAN (Permanent Account Number) of the account holder (a unique identification number used for tax purposes in India).
  - `Account_type`: The type of account (e.g. savings, checking).
  - `Agree`: Whether or not the account holder has agreed to the terms and conditions.
  - `Annual_income`: The annual income of the account holder.
  - `Balance`: The current balance of the account.
  - `Customer_id`: Unique identifier for each customer associated with an account.
  - `DoB`: The date of birth of the account holder.
  - `Password`: The password associated with the account.
  - `Occupation`: The occupation of the account holder.
  - `Opening_date`: The date on which the account was opened.
  - `Mobile_num`: The mobile number associated with the account.
  - `Permanent_address`: The permanent address of the account holder.
  - `Residential_address`: The residential address of the account holder.
  - `Registration_date`: The date on which the account was registered.
  - `Is_locked`: Whether or not the account is locked.

---

## 3. Installation and Setup

### Prerequisites

Before setting up Online Banking System, ensure you have the following software/tools installed:

- Java Development Kit (JDK)
- Node.js and npm
- MariaDB
- IDE (Integrated Development Environment) of your choice

### Installation Steps

Follow these steps to set up HooBank on your local environment:

1. **Clone the Repository:**
   ```
   git clone https://github.com/adil-01/hoobank_backend
   git clone https://github.com/adil-01/hoobank_frontend
   ```

2. **Backend Setup:**
   - Open the backend project in your IDE.
   - Configure the database connection in `application.properties`.
   - Run the Spring Boot application.

3. **Frontend Setup:**
   - Navigate to the frontend directory: `cd hoobank_frontend`
   - Install frontend dependencies: `npm install`
   - Start the development server: `npm start`

4. **Access the Application:**
   Open your web browser and visit `http://localhost:3000` to access HooBank.

---

## 5. Account Management

### User Registration

![Create Account](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/register.png)

New users can register for internet banking using the following steps:

1. Navigate to the registration page.
2. Fill in the required details (Account Number, password, etc.).
3. Submit the registration form.

### User Login and Authentication

![Login](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/login.png)

Registered users can log in using their credentials:

1. Access the login page.
2. Enter the customer ID and password.
3. Click the "Login" button.
4. Upon successful authentication, the user will be redirected to their dashboard.

### Account Recovery

Users who forget their password, can follow these recovery steps:

2. **Forgot Password:**

![fORGOTpASSWORD](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/forgot_password2.png)

   - Click the "Forgot Password" link on the login page.
   - Provide the Customer ID.
   - Verify with OTP and redirect to create new password page.
   - Set a new password and confirm the same.

3. **Account Locked:**
   - If the account is locked due to multiple failed login attempts, the users account can get locked by admin.
   - Visit the branch and get your account unlocked by admin.

### User Dashboard

![Dashboard](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/dashboard.png)

Once logged in, users are directed to their dashboard, where they can access various account-related features:

1. Account Summary: An overview of their account balances and recent transactions.
2. Account Statement: Detailed view of account transactions within a specified timeframe.
3. Change Password: Option to update the account password.
4. Session Management: View and manage active sessions for enhanced security.

### Account Creation

![Account Creation](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/create_account.png)
Users can open a new bank account by following these steps:

1. Click the "Open an Account" button.
2. Provide personal and account-related details.
3. Agree to terms and conditions.
4. Submit the application for review.

![GenAccNo](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/generate_accNo.png)

## 6. Fund Transfers

### Adding Payees
![Add Payee](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/add_beneficiary.png)
Before initiating a fund transfer, users must add payees (other users' bank account details) using the "Add Payee" feature:

1. Access the "Add Payee" page.
2. Enter the payee's account details (account number, bank details, etc.).
3. Verify the payee information.
4. Confirm the addition.

### Fund Transfer Methods

![Transaction Type](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/trans_type.png)

Users can transfer funds to other accounts using various methods:

1. NEFT (National Electronic Funds Transfer)
2. IMPS (Immediate Payment Service)
3. RTGS (Real Time Gross Settlement)

### Transaction Validation

![TransactionValidation](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/transaction_validation.png)

Before confirming a fund transfer, users should review the transaction details and confirm the recipient's information. 
- The upper limit of the transaction has been set as Rs 2,00,000.
- Validating the amount whether its negatvie or greater than the account balance.

## 7. Admin Dashboard

![Admin](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/admin_page.png)

### Admin Login

Administrators can access a dedicated dashboard to manage user accounts, and system settings.
- Admin Login & Authentication
- JWT State Management

### Account Management

Admins can perform various tasks related to Account management:

1. View Account: List of registered users with key details.
2. Edit Account: Modify user details (name, email, etc.).
3. Delete Account: Remove a user account from the system.

## 8. Transaction History

### Viewing Transaction History

![TransactionHistory](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/dashboard_transaction.png)

Users can view their transaction history by accessing the "Transaction History" section:

1. Auto fetching account using JWT token.
2. Search for the desired transaction.
3. View a list of transactions with details & status.

### Transaction Details

![TransactionDetails](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/trans_details.png)
Clicking on a specific transaction provides users with detailed information about that transaction:

1. Transaction ID
2. Date and Time
3. Remarks
4. Sender and Receiver Details
5. Transaction Amount
6. Payment Method
7. Status (Pending, Completed, Failed, etc.)

## 9. Page Descriptions

### User Management Pages

- Home Page: Landing page after login.
- Login: User authentication page.
- Open an Account: Account creation form.
- Register for Internet Banking: Instructions for online registration.
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

## 11. Testing

- **API Testing:**
     - API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security. Since APIs lack a GUI, API testing is performed at the message layer.

   - API testing is used to determine whether APIs return the correct response (in the expected format) for a broad range of feasible requests, react properly to edge cases such as failures and unexpected/extreme inputs, deliver responses in an acceptable amount of time, and respond securely to potential security attacks.

   - API testing involves testing APIs directly (in isolation) and as part of the end-to-end transactions exercised during integration testing. Beyond RESTful APIs, these transactions include multiple types of endpoints such as web services, ESBs, databases, mainframes, web UIs, and ERPs.

   - API testing plays a central role in the API-first approach, as it enables teams to continuously verify the quality, health, and performance of their endpoints as they work to deliver a seamless digital experience. There are several types of API tests, and each one plays a distinct role in ensuring the API remains reliable. Traditionally, API testing has occurred at the end of the development phase, but an increasing number of teams are running tests earlier in the API lifecycle. This approach to API testing, which is known as "shifting left," supports rapid iteration by enabling teams to catch and fix issues as soon as they are introduced.

- **Integration Testing:**
   - Integration testing is a type of software testing where individual software modules are combined and tested as a group. It is conducted to evaluate the compliance of a system or component with specified functional requirements. The purpose of this level of testing is to expose defects in the interaction between these software modules when they are integrated¹. Integration Testing focuses on checking data communication amongst these modules.

   - There are several types of Integration Testing, including Big Bang Testing, Incremental Testing, Bottom-up Integration Testing, Top-down Integration Testing, and Sandwich Testing. The goal of integration testing is to check the correctness of communication among all the modules. Once all the components or modules are working independently, then we need to check the data flow between the dependent modules is known as integration testing.

   - Some best practices for Integration Testing include determining the Integration Test Strategy that could be adopted and later preparing the test cases and test data, studying the Architecture design of the Application and identifying the Critical Modules, designing test cases to verify each interface in detail, choosing input data for test case execution, performing positive and negative integration testing, and communicating bug reports to developers and fixing defects and retesting.

- **Unit Testing:**
   - Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

   - Unit Testing is important because it helps to fix bugs early in the development cycle and save costs. It helps the developers to understand the testing code base and enables them to make changes quickly. Good unit tests serve as project documentation. Unit tests help with code re-use.

   - There are several techniques for Unit Testing, including Black Box Testing, White Box Testing, and Gray Box Testing. Black Box Testing is used in covering the unit tests for input, user interface, and output parts. White Box Testing is used in testing the functional behavior of the system by giving the input and checking the functionality output including the internal design structure and code of the modules. Gray Box Testing is used in executing the relevant test cases, test methods, test functions, and analyzing the code performance for the modules.

**React Testing:**
![ReactTesting](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/IMG-20230821-WA0002.jpg)

**Spring Boot Testing:**
![SpringBootTesting](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/spring%20boot%20testing.PNG)


## 12. PWA (Progressive Web App)

A **Progressive Web App (PWA)** is a type of application built using web technologies, but provides a user experience similar to that of a platform-specific app. PWAs can run on multiple platforms and devices from a single codebase, just like a website. They can also be installed on the device, operate offline and in the background, and integrate with the device and other installed apps.

![PWA](https://github.com/aseemsangalay/OnlineBankingSystem/blob/main/HooBank%20PWA%20Summary_page-0001.jpg)

We have tested the PWA functionalitiese using Google Chrome Developer Tools using Lighthouse tool and the report is shown above.

Overall, PWAs provide a native-like experience to users on supporting devices while being adaptable to different browsers and devices. We have implemented using `serviceWorker.js` by registering, fetching and unregister properties we will store the cache version of website and can use in offline mode in mobile devices also.


## 13. Future Enhancements

Consider the following potential improvements for HooBank:

- **Multi-factor Authentication:** Enhance security with additional authentication methods.
- **Real-time Notifications:** Notify users about account activities via email or SMS.
- **International Fund Transfers:** Enable cross-border transfers.
- **Enhanced Admin Tools:** Provide more robust user management features for administrators.

## 14. Conclusion

In conclusion, Online Banking System is a comprehensive banking application that offers users a range of functionalities, including user management, account management, fund transfers, and more. With its intuitive interface and robust features, HooBank aims to provide a seamless banking experience for both users and administrators.
