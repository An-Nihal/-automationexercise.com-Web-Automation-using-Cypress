
# 'automationexercise' Web Automation using Cypress

This repository contains end-to-end tests for the website [https://automationexercise.com/](https://automationexercise.com/) using Cypress, a JavaScript end-to-end testing framework. 


## Setup

**Note:** You need to have **node** installed on your machine in order to run the tests. You can download node from [here.](https://nodejs.org/en/download)

1.  **Clone this repository:**
    
    ``` console
    
    git clone https://github.com/your-username/automation-exercise.git` 
    ```
2.  **Install dependencies:**
    
    ``` console
    cd /your/project/path npm  install cypress --save-dev` 
    ```
    
3.  **Configure base URL:**
    
    Update the base URL in cypress.env.json to match your testing environment. I have added https://automationexercise.com/ as the baseurl.
    
4.  **Provide user data:**
    
    Make sure to update **cypress/fixtures/userdata.json** with valid user information, including credentials, personal details, and card information for testing purposes or leave it be as mine.
    

## Running Tests

To run the tests, execute the following command:
``` console

npx cypress run    //for headless mode
```
**or**
``` console
npx open cypress //open cypress UI and run specs in browser
```

Headless mode will automatically execute all the test specs in the specified sequence as configured in **cypress.config.js**

## Test Scenarios

1.  **Login and Signup Validation:**
    
     -   Test the signup process with valid information.
     - Test the signup process using existing email.
    -   Verify login with valid credentials.
    -   Validate error messages for login with invalid credentials.
   
2.  **Product Search and Verification:**
    
    -   Search for products.
    -  Using different criteria (brands, categories) verify products list.
    -   Verify the correctness of the displayed products.
3.  **Cart Operations:**
    
    -   Add products to the cart.
    -   Validate the content of the cart.
    -   Proceed to checkout.
4.  **Payment and Purchase:**
    
    -   Complete the payment process.
    -   Verify the successful purchase.
5.  **Contact Us Form:**
    
    -   Fill out the contact form with attachments.
    -   Verify the sent message.
6.  **Account Deletion:**
    
    -   Delete the user account.
    -   Confirm the account has been deleted successfully.

## Folder Structure

-   **cypress/e2e:** Contains the test specs for different scenarios.
-   **cypress/fixtures:** Stores user data in **userdata.json**
-   **cypress/support:** Includes utility functions and custom commands.
-   **cypress.env.json:** Configuration file for the base URL.
-   **cypress.config.js:** Configuration file for Cypress, specifying the test specs sequence.

## Continuous Integration

You can integrate this test suite into your CI/CD pipeline for automated testing on each code push. Cypress supports various CI providers such as Travis CI, CircleCI, and GitHub Actions.

## Screenshots
**Folder Structure :**
![Folder Structure](https://prnt.sc/gsUo6kbMxE5C)

**SignUp spec running (Headless Mode):**
![SignUp - Headless](https://prnt.sc/Q6r_zt1xzKMN)

**SignUp spec running (Headed Mode):**
![SignUp - Headed](https://prnt.sc/eVl6l7P-i0ku)

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.
