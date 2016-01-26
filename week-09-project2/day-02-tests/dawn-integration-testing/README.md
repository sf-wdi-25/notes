# Integration / Acceptance testing with Selenium & Capybara


| Objectives |
| :---- |
| Explain the difference between unit and integration tests |
| Learn about the role of integration testing in a rails app |
| Write feature specs using Capybara |


## Integration vs. Unit tests

In unit testing we focus on isolating each component (classes, models, etc) and testing it with as few other components as possible.  

In integration testing we focus on the interactions between different components and verify they work together as expected.  Rather than testing individual components we're testing the interface between them; or you could say we're testing the _system_ rather than the component.

In the rails world "integration specs" are generally full-stack tests performed by controlling a browser to interact with your pages.
They exercise models, views, controllers and any other components of your app.  Rather than isolating components we verify they all work together.  When we write these **acceptance tests** we behave just like a user of our app; clicking buttons & links, filling forms and reading text from the page.

## RSpec feature specs

Feature specs are what RSpec calls its integration tests.

> Hint these files go in `spec/features`

They can be written either using the standard RSpec syntax with: `describe`, `it`, `before`, and `let`;
or with an acceptance test style syntax with: `feature`, `scenario`, `background`, and `given`.

## Capybara & Selenium

Capybara is a ruby gem used for writing acceptance tests.  It uses Selenium or other _drivers_ to browse a site just like a user would.  
It can be used with a number of _fake_ browsers (drivers) such as phantomJS, or the default rack-driver.  (_faster but less realistic_)
Or it can be used with real browsers like firefox or chrome using Selenium.  (_slower but more realistic_)
You can even use selenium to control android and iOS testing.  

Capybara adds some very nice ruby sugar around selenium and makes it much easier to use.

<describe><summary>Why Capybara?</summary>
If you think about many websites, there are often many asynchronous things happening in the background.  There could be any number of AJAX requests changing the page at a time, images are loaded as they come in and there may be animations occurring.  
It also takes time to load pages.  That means a very large part of an integration test developer's job is to write test code
that can appropriately wait for things on the page to load before failing the test or before trying to click something that isn't there yet.  
This actually turns out to be a pretty complex problem.  

Fortunately for us, Capybara does all of this waiting for us.  We can have fast tests that also won't fail randomly because jQuery took a little longer to load some data.  Hooray!
</describe>

## Clean room

![](http://www.cleanroombuilders.com/resources/Graphic4.jpg)

When we test we usually try to control the testing environment and remove external factors that could cause false test results or intermittent failures.  

Part of this involves making sure that cookies and cache are clean when the spec starts.  You wouldn't want your test to start-up using your personal account rather than the "test" account it expects.  

We also want to have a clean database so that we can easily make expectations about how records in the database will look.  We'll use DatabaseCleaner for this.


### A note about databases and Database Cleaner

When we run tests in RSpec, it usually runs all the steps of each test (including before and after blocks) inside a _database transaction_.
After the test is complete, the transaction is rolled-back, so it never actually is stored to disk.

> Hint: this is called transactional fixtures

Unfortunately the database transaction running in the RSpec thread is not the same transaction our browser will access through the full-stack; that means any data we've setup in our spec (like say the User you want to login as) won't be accessible in the browser.

To get around this we'll use DatabaseCleaner.  With DatabaseCleaner we can use **truncation** instead for our integration tests.  Truncation means that at the end of the test, we tell the database to truncate every table, effectively cutting off whatever data is on it.

> Note: the default rack-test driver is fast and works just fine with transactional fixtures; however it can't run javascript at all!  If your site needs javascript, you'll have to use another browser with DatabaseCleaner.

## Sample spec

```ruby
describe "the signin process", :type => :feature do
  before :each do
    User.make(:email => 'user@example.com', :password => 'password')
  end

  it "signs me in" do
    visit '/sessions/new'
    within("#session") do
      fill_in 'Email', :with => 'user@example.com'
      fill_in 'Password', :with => 'password'
    end
    click_button 'Sign in'
    expect(page).to have_content 'Success'
  end
end
```

## Basic Capybara methods

### Interacting With The Page

* visit '/login'
* click_on 'Login'
* click_link 'About'
* find('.btn-danger.delete') # takes any valid CSS selector, returns 1
* all('.btn') # finds all the matches
* fill_in('Password', :with => 'Seekrit')
* select('Red', from: 'Colors')


### Asserting

* `expect(page).to have_selector('#success')`
* `expect(page).to have_content('foo')` # testing for text on the page
* `expect(page.find('.error')). to have_content('Please fill in email')`
* `expect(page).to have_no_css('.error')`


### Emulating a real user

Keep in mind that Capybara is designed to emulate a real person using the browser (just much faster).  That means it:

* doesn't effect the javascript on the page
  * (although if you absolutely have to, there is a way)
* it doesn't let you interact with any elements that a user couldn't
  * hidden elements can't be clicked!
  * elements behind other elements can't be found
  * assertions against hidden elements will FAIL!
    * workaround

As you write your tests, try to write them to do things the way a user would.

## View Specs & JS

Previously we looked at _model specs_ and _controller specs_, now we're looking at feature specs.  

_But, what about views?_

The amount of testing that should be done has always been a subject of debate.  Some developers insist that you should write unit tests for every possible component of the system. (with good reason) But others feel that having integration tests that cover some components is fine.

In rails our views should generally have far more HTML than Ruby.  That means they should be relatively un-complicated.  In fact, if you need more logic in your views you should probably be putting it in helpers (or presenters) and writing tests for those.

So in the end, some developers do not write view specs; instead they rely on integration tests for their simple views.  It's a choice your team should make together.

_But, what if I have a lot of javascript on my pages?_

Test this javascript using:
1) Unit tests: A javascript testing framework like _jasmine_, _mocha/chai_, _qunit_, or _konacha_.
2) Integration tests: The built-in waiting ability of Capybara means that it works quite well for testing pages with javascript.


## Who does this?

Many developers following TDD or BDD patterns write integration tests for every feature they work on.

Many teams have SQA (Software Quality Assurance) or Test Engineers that write a large amount of test code.  They fill a very important role in software development teams.

## Cucumber

Another popular tool used for acceptance (and BDD) testing is Cucumber.  This tool is truly designed for BDD and allows you to write test scripts in natural language.  Each _sentence_ is matched to a block of test-code.  This means you can write tests, together with your (non-technical) clients.

Example:

```gherkin
Feature: Showing tasks

  Background:
    Given @charles exists and is logged in
    And I am in the project called "Teambox"
    And the task list called "Bugs" belongs to the project called "Teambox"
    And the following task with associations exist:
      | name          | task_list | project |
      | Fix major bug | Bugs      | Teambox |
    And the task called "Fix major bug" is due today
    And the task called "Fax Major" is assigned to "charles"

  Scenario: I timewarp to the future and see my task is now late
    Given @charles has his time zone set to Madrid
    And utc time is now 1 hour and a bit before midnight
    And I go to the "Teambox" tasks page
    Then I should see "1 days late"
    And time is flowing normally again
```
