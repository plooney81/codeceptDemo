Feature('Chat Feature');

const login = (I) => {
    I.amOnPage('/'); //opens the site
    I.see('Pair'); //Checks to see if it has loaded properly
    I.click('Login'); //Clicks the signup link
    I.seeElement('#formBasicEmail'); //Checks to see if the right for has loaded

    I.fillField('#formBasicEmail', 'test100@test.com'); //types in a test email 
    I.fillField('#formBasicPassword', secret('123456')); // types in a test password
    I.click('.signup-button'); // clicks the signup button in the form...should say login on this page
}

Scenario('Login and Create A New Chat Group', ({ I }) => {
    const groupNames = ['Python Crazies', 'Pete\'s Coding Crew', 'Pair questions chat', 'Misc'];
    //addedGroup${groupInfo.name}
    login(I);
    I.seeElement('.message-form'); //simple check to see if we are actually on the chat page
    I.wait(2);
    I.click('.hide-side-button') //click the side button
    I.see('Current Groups', 'h3'); //sees that the side button div is open

    //Loop to create a new group for each groupName in the groupNames array;
    groupNames.forEach(groupName => {
        I.fillField('#newGroupForm', groupName); //fills in form with specified name
        I.click('Add'); //adds the group by clicking the Add button
        I.wait(5);
        I.click('Home');
        I.click('Chat');
        // I.seeElement(groupName, `.addedGroup`); //checks that the user can now see the added group
    })
    
    // I.fillField('.message-form', "Hello World");
    
});

// Scenario('Click on a chat group', ({I}) => {
//     I.amOnPage('/login');

// });