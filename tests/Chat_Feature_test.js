Feature('Chat Feature');

Scenario('Login and Create A New Chat Group', ({ I }) => {
    I.amOnPage('/'); //opens the site
    I.see('Pair'); //Checks to see if it has loaded properly
    I.click('Login'); //Clicks the signup link
    I.seeElement('#formBasicEmail'); //Checks to see if the right for has loaded

    I.fillField('#formBasicEmail', 'test100@test.com'); //types in a test email 
    I.fillField('#formBasicPassword', secret('123456')); // types in a test password
    I.click('.signup-button'); // clicks the signup button in the form...should say login on this page
    const groupName = 'Demo Group';
    I.seeElement('.message-form'); //should take us to the chat page
    I.wait(5);
    I.click('.hide-side-button') //click the side button
    I.see('Current Groups', 'h3'); //sees that the side button div is open
    I.fillField('#newGroupForm', groupName); //adds a new chat group with the name
    I.wait(5);
    I.click('Add');
    I.wait(5);
    I.click(groupName, 'span')
    
});
