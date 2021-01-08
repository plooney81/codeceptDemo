# codeceptDemo

## About this Repo:
This repsitory houses some test cases I created while learning the CodeceptJS testing framework. Currently I use it to test one of my react projects called Pair...which can be found [here](https://pair-chat.netlify.app/)

## What is CodeceptJS?
- An end 2 end testing framework with a Behavior-Driven Development (BDD) syntax.
- With Codecept, you write tests from the users perspective.
- Each test is written inside a Scenario function with the I object passed to it.
```javascript
    Scenario('Opening Pair Chat', ({ I }) => {
        I.amOnPage('/'); //opens the site, we specified the url inside of codecept.conf.js
        I.see('Pair'); //Checks to see if it has loaded properly
    });
```
- Read more about CodeceptJS [here](https://codecept.io/basics/)

## What is Behavior-Driven Development?
- BDD is an Agile software development process.
- It encourages teams to use conversation and concrete examples to formalize a shared understanding of how the application should behave.
- Promotes collaboration with the development, QA, and Non-Technical/business participants in software project.
- Read more about BDD [here](https://en.wikipedia.org/wiki/Behavior-driven_development)