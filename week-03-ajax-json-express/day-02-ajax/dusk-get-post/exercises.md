## Exercises - AJAX: GET & POST

For these challenges, you'll be using the `books` endpoint of <a href="https://github.com/sf-wdi-25/crud-api" target="_blank">this RESTful API</a>. Your goal is to use AJAX to `READ` all the `books` from the API and `CREATE` new `books`.

Note that most APIs require an API key if you want to do anything other than read data, and a lot of them even require a key just to read. We made this API for you to explore CRUD, no API key required!

1. Use Postman to `GET` all the `books`. Now get just one book using the `_id`.
2. Use Postman to send a `POST` request to create a new book:
    - set `author` to YOUR-NAME, and make up values for the other fields.
    - What does your response data look like? What is the "id" of your book?
3. How would you request your book, using your id?
4. How would you update your book to change the date to your birthdate?
5. How would you delete your book?

For the rest of the challenges, fork and clone the <a href="https://github.com/sf-wdi-25/ajax-crud-book-app" target="_blank">ajax-book-app</a> repo.

1. Use AJAX to `GET` all the `books` from the API. Your first step should be to `console.log` the data from the API.
    - How would you drill down into the books data and retrieve just one book?
    - Can you console-log the title of the first book?
2. Using jQuery, can you figure out how to add just one book title to the page?
    - Can you add *all* the books to the page?
3. From your console, can you create a new book on the server by making an AJAX `POST` request?
4. Add an HTML form to `index.html` so that a user can create a new book.
5. When a user submits the form, use AJAX to send a `POST` request to create a new book. (Our goal here is to make sure the page **does not** refresh when we submit the form!)
6. Use jQuery to add the newly created book to the page. But make sure that it only adds it to the page if the `POST` was successful! (How would you know?)
