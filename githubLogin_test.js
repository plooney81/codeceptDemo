Feature('Pair Signup and Login');

Scenario('Pair Chat bad Login', ({ I }) => {
    I.amOnPage('/'); //opens the site
    I.see('Pair'); //Checks to see if it has loaded properly
    I.click('Signup'); //Clicks the signup link
    I.seeElement('#formBasicEmail'); //Checks to see if the right for has loaded

    I.fillField('#formBasicEmail', 'test100@test.com'); //types in a test email 
    I.fillField('#formBasicPassword', secret('12345')); // types in a test password
    I.click('Sign Up'); // clicks the signup button in the form

    I.see('Password should be at least 6 characters'); //should output a message saying the password wasn't long enough
});


Scenario('Pair Chat Successful Login', ({ I }) => {
    I.amOnPage('/'); //opens the site
    I.see('Pair'); //Checks to see if it has loaded properly
    I.click('Login'); //Clicks the signup link
    I.seeElement('#formBasicEmail'); //Checks to see if the right for has loaded

    I.fillField('#formBasicEmail', 'test100@test.com'); //types in a test email 
    I.fillField('#formBasicPassword', secret('123456')); // types in a test password
    I.click('.signup-button'); // clicks the signup button in the form...should say login on this page

    I.seeElement('.message-form'); //should take us to the chat page
});
