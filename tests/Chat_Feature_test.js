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

// Scenario('Login and Create A New Chat Group', ({ I }) => {
//     const groupNames = ['Python Crazies', 'Pete\'s Coding Crew', 'Pair questions chat', 'Misc'];
//     //addedGroup${groupInfo.name}
//     login(I);
//     I.seeElement('.message-form'); //simple check to see if we are actually on the chat page
//     I.wait(2);
//     I.click('.hide-side-button') //click the side button
//     I.see('Current Groups', 'h3'); //sees that the side button div is open

//     //Loop to create a new group for each groupName in the groupNames array;
//     groupNames.forEach(groupName => {
//         I.fillField('#newGroupForm', groupName); //fills in form with specified name
//         I.click('Add'); //adds the group by clicking the Add button
//     })
// });

Scenario('Click on a chat group', ({I}) => {
    login(I);
    I.click('Chat'); //navigate to the chat page
    I.click('.hide-side-button') //click the side button
    I.click(locate(`.addedGroupMisc`).withText('Misc')); //click on the right group to load
    I.wait(2);
    I.fillField('.text-input', 'Testing with CodeCept'); //Type
    I.click('.fa-paper-plane');
});