# Project Planning in Rails
<img src="https://media.giphy.com/media/lfbxexWy71b6U/giphy.gif" width=400>

For this morning's review we will have you working in small groups.

* **No computers**! If you want to look something up you need to tell an instructor exactly what you're looking for, and get their permission.
* **Client Approval** You must get client approval before moving forward with any plans.

You have been approached by a client to build a website. Your client is interested in the following data (1 per group):

1. ZookeeperBeeper: Zoos, Animals, Caretakers
1. VentAboutBooks: BookClubs, Members, Events
1. ProperManagement: PropertyManagers, Properties, Tenants
1. StoreCorp: Stores, Items, Employees
1. NPODough: Nonprofits, Patrons, Donations
1. GoTeam: SportsTeams, Players, Games
1. Potlucky: Guests, Allergies, Potlucks
1. Hipstersodes: Podcasts, Episodes, Listeners

Your developers are chomping at the bit! They want to start coding! But you need to assign them user stories first, and figure out your database tables!

#### 1. Draw your database tables / relationships
What kind of relationships are there in your data? Draw a ERD diagram and database tables. Where will you put your foreign keys?

> Make sure to get client approval before moving on.

#### 2. Planning Features
Let's consider a feature to be a "vertical" or "full-stack" addition, from database table to html view.

* What is your MVP?
* How will you prioritize what needs to be built first?
    * If you had to launch in only 2 hours, what would be the hightest "value add" - the very first thing your users would want.

> Make sure you consider your client's priorities!

<img src="http://squarism.com/uploads/2014/11/agile_car.png" width=400>

#### 3. Writing User Stories
Let's consider a feature to be a "vertical" or "full-stack" addition, from database table to html view. Each feature should be a logical grouping of roughly 3 user stories.

- Feature 1
    + User Story
    + User Story
    + User Story
- Feature 2
    + User Story
- Feature 3
    + User Story
    + User Story

Please write a complete set of "User Stories" for your highest priority feature, so that your developers can start coding.

User Stories must be fine-grained and directly actionable. Each user story should being with "A user can..." followed by an action ("visit a...", "click on...", "type into...") and an outcome ("and see a list of students", "and be logged in").

#### 4. What will your routes look like?
With reference to your highest priority feature above, write out all of your RESTful routes. 

* What endpoints will you need? (Think about CRUDing the resource!)
* Do you need to add or update any user stories?

#### 5. Build the feature
Write out, by hand, the **rails commands** and **terminal commands** you need to use, and the files those commands create. _You must get approval for each step!_

Use a seperate piece of paper for each file you create / generate:
* migrations
* schema
* models
* routes
* controllers
* views

When you are finished I should be able to simulate visiting an endpoint, and be able to walk through each step of your code, from route to database to view.

> Whiteboarding pro-tip: Use lots of vertical whitespace so that you can make changes to your code!

**Make sure to ask an instructor to "run" your code!**
<img src="https://media.giphy.com/media/vq4q4LqJv3Qcg/giphy.gif" widht=400>
