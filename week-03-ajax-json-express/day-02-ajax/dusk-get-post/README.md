# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> RESTful Routing: Create & Read

| Objectives |
| :--- |
| Explain CRUD and RESTful Routing |
| Create and Read data using a RESTful API |
| Create data using HTML forms & AJAX |

![crud-all-the-things](https://cloud.githubusercontent.com/assets/7833470/10917104/d7fdd2ee-8213-11e5-8cf8-466ff1677a6d.jpg)

## What is CRUD?

CRUD describes the **basic operations of a persistent database**. Every database action can be categorized into one of the four CRUD operations:

* **Create** - adds new data to the database
* **Read** - retrieves data from the database (can be one record or a collection of records)
* **Update** - edits existing data in the database
* **Destroy** - removes data from the database

Our own applications don't have databases yet (we'll get there!), but as you already learned, we can interact with external databases through APIs.

## The REST of CRUD

CRUD is so common, and so useful, that we'll often describe our web applications as "CRUD apps". But how do we get from the front-end all the way to the database? When I fill out a form to sign-up for a website, how does that data get saved to the database? We're missing a step!

REST stands for **Representational State Transfer**. When we talk about REST we're describing a combination of an HTTP Method + a structured API endpoint. The whole point of REST is to make it easy and convenient for web developers to know _where to send data_ and _where to find data_.

Let's start with the "verbs" (HTTP methods), and their corresponding CRUD operations:

| HTTP Method | CRUD operation | Example |
| :--- | :--- | :--- |
| `POST` | _create_ | create a new blog post |
| `GET` | _read_ | retrieve an existing blog post |
| `PUT` | _update_ | edit an existing blog post |
| `DELETE` | _destroy_ | delete an existing blog post |

## RESTful Routing

REST follows a routing convention, meaning that the type of request you're making also determines what the URL (route) will look like. You'll often hear the term "RESTful API", which simply means that the API follows the conventions of REST and RESTful Routing.

REST is a combination of a "verb" (HTTP Method) and an "address" (a URL path / route / or API Endpoint). Here's what RESTful routing looks like for a database of `photos`:

| HTTP Method | URL | Example | a.k.a. |
| :--- | :--- | :--- | :--- |
| `GET` | `/photos` | _read_ all the photos | photos index (list) |
| `POST` | `/photos` | _create_ a new photo | new photo |
| `GET` | `/photos/:id` | _read_ photo #3 | show photo |
| `PUT` | `/photos/:id` | _update_ photo #77 | edit photo |
| `DELETE` | `/photos/:id` | _destroy_ photo #94 | destroy photo |

Wowa, what's with the `:id` thing? That's just a _pattern_ we're looking for. We want a resource (a photo) with a specific `id` (e.g. #3, #77, #94, etc). In practice we'd see things like:

* `GET http://www.example.com/api/photos/3`

#### Questions
* Why not just use `GET` everywhere / for everything?
* Why not just have endpoints like `/get_photo_3` and `/edit-picture-27-plz`?
* Some endpoints have an `id` and others do not. What's the logic to it?

## AJAX Refresher: GET & POST
Great, we've got a handle on our "verbs" (HTTP Methods) and our "addresses" (API endpoints). Now let's put it into practice! It's time for some AJAX:

#### `GET /books` - read all the books

```js
$.ajax({
  method: "GET",
  url: "https://super-crud.herokuapp.com/books",
  success: function (data) {
    console.log(data.books); // lots of books in here!
  },
  error: function () {
    console.log("uh oh...")
  }
});
```

#### `GET /books/1` - read book \#1

```js
$.ajax({
  method: "GET",
  url: "https://super-crud.herokuapp.com/books/1",
  success: function (book) {
    console.log(book); // just book #1 in here!
  },
  error: function () {
    console.log("uh oh...")
  }
});
```

#### `POST /books` - create a new book
```js
$.ajax({
  method: "POST",
  url: "https://super-crud.herokuapp.com/books",
  data: {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg",
    releaseDate: "September 1, 1998"
  },
  success: function (book) {
    console.log("your book was successfully created!")
    console.log("your book has an id of", book._id)
    // render book to page
  },
  error: function () {
    console.error("uh oh... failed to create your book")
  }
});
```

#### `PUT /books/10` - update (edit) book \#10
```js
$.ajax({
  method: "PUT",
  url: "https://super-crud.herokuapp.com/books/10",
  data: {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg",
    releaseDate: "September 1, 1998"
  },
  success: function (book) {
    console.log("your book was successfully updated!");
  },
  error: function () {
    console.error("uh oh... failed to update your book.")
  }
});
```

#### `DELETE /books/10` - destroy book \#10
```js
$.ajax({
  method: "DELETE",
  url: "https://super-crud.herokuapp.com/books/10",
  success: function () {
    console.log("your book was successfully deleted!");
  },
  error: function () {
    console.error("uh oh... failed to update your book.")
  }
});
```


## Challenges

1. Practice GET and POST using the Postman Chrome Extension
2. Then, try it with AJAX, and render the response to the page.

Head over to the exercises to get started:

[Book App](exercises.md) - [solutions](solutions.md)

## Resources
* More lectures notes on [Update & Destroy](update-destroy.md)

#### Documentation
* <a href="https://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>

Shorthand jQuery AJAX requests:

* <a href="https://api.jquery.com/jquery.get" target="_blank">jQuery.get()</a>
* <a href="https://api.jquery.com/jquery.post" target="_blank">jQuery.post()</a>
