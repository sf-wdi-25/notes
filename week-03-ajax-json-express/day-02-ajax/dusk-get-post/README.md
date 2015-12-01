# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> RESTful Routing: Create & Read

| Objectives |
| :--- |
| Explain CRUD and RESTful Routing |
| CREATE and READ data from an RESTful API using AJAX |
| Display data on the page with Handlebars templating |

![crud-all-the-things](https://cloud.githubusercontent.com/assets/7833470/10917104/d7fdd2ee-8213-11e5-8cf8-466ff1677a6d.jpg)

## What is CRUD?

CRUD describes the **basic operations of a persistent database**. Every database action can be categorized into one of the four CRUD operations:

* **Create** - adds new data to the database
* **Read** - retrieves data from the database (can be one record or a collection of records)
* **Update** - edits existing data in the database
* **Destroy** - removes data from the database

Our own applications don't have databases yet (we'll get there!), but as you already learned, we can interact with external databases through APIs.

## The REST of CRUD

REST stands for **Representational State Transfer**. This means that the type of request you make to the server (`GET`, `POST`, `PUT`, or `DELETE`) represents the action you want to take (`create`, `read`, `update`, or `destroy`).

Let's look at the different types of HTTP methods and their corresponding CRUD operation:

| HTTP Method | description |
| :--- | :--- |
| `POST` | create |
| `GET` | read |
| `PUT` | update |
| `DELETE` | destroy |

## RESTful Routing

REST follows a routing convention, meaning that the type of request you're making also determines what the URL (route) will look like. You'll often hear the term "RESTful API", which simply means that the API follows the conventions of REST and RESTful Routing.

Here's what RESTful routing looks like for a database of `photos`:

| HTTP Method | URL | CRUD Action |
| :--- | :--- | :--- |
| `GET` | `/photos` | lists all the photos ("index") |
| `POST` | `/photos` | creates a new photo |
| `GET` | `/photos/:id` | e.g. reads photo #3 |
| `PUT` | `/photos/:id` | e.g. updates photo #77 |
| `DELETE` | `/photos/:id` | e.g. destroys photo #94 |

## AJAX Refresher: GET & POST

```js
// GET all books (books index)
$.ajax({
  method: "GET",
  url: "https://super-crud.herokuapp.com/books",
  success: function (data) {
    console.log(data);
  },
  error: function () {
    console.log("uh oh...")
  }
});

// POST request to create a new book
$.ajax({
  method: "POST",
  url: "https://super-crud.herokuapp.com/books",
  data: {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg",
    releaseDate: "September 1, 1998"
  },
  success: function (data) {
    console.log(data); // better yet, add it to the page!
  },
  error: function () {
    console.log("uh oh...")
  }
});
```

Right now we're just console-logging the response data -- ideally, when we get the response data back from the server, our "success" callback would render the information to the page using jQuery. Can you figure out how you would "drill down" into the `data` object and then use jQuery to add it to the page?

## Challenges

Practice GET and POST using the Postman Chrome Extension & AJAX

[Book App / GET & POST Exercises](/exercises.md) - [solutions](/solutions.md)

## Resources
* <a href="https://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>

Shorthand jQuery AJAX requests:

* <a href="https://api.jquery.com/jquery.get" target="_blank">jQuery.get()</a>
* <a href="https://api.jquery.com/jquery.post" target="_blank">jQuery.post()</a>
