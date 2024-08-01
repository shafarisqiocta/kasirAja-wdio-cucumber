Feature: Register, Login, Category, Customer KasirAja

    @all @positive
    Scenario: Successful registration user with valid credentials
        Given I am on the register page
        When I register with valid credentials
        Then I should be redirected to the login page
    
    @all @negative
    Scenario: Failed login user with invalid password
        Given I am on the login page
        When I login with password invalid
        Then I should see an error message

    @all @positive
    Scenario: Successful login user with valid credentials
        Given I am on the login page
        When I login with valid credentials
        Then I should be redirected to the dashboard

    @all @positive
    Scenario: Successful add a new category
        Given I am on the dashboard page
        When I go to the category menu
        And I click the add button
        And I fill in the category name and description
        Then I should see an success message
    
    @all @positive
    Scenario: Successful add a new customer
        Given I am on the dashboard page
        When I go to the customer menu
        And I click the add button
        And I fill in the add customer form
        Then I should see an success message 