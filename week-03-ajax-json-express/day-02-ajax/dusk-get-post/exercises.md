## Exercises - AJAX: GET & POST

For these challenges, you'll be using the `books` endpoint of <a href="https://github.com/sf-wdi-24/crud-api" target="_blank">this RESTful API</a>. Your goal is to use AJAX to `READ` all the `books` from the API and `CREATE` new `books`.

Note that most APIs require an API key if you want to do anything other than read data, and a lot of them even require a key just to read. We made this API for you to explore CRUD, no API key required!

1. Use Postman to `GET` all the `books`. Now get just one book using the `_id`.
2. Use Postman to send a `POST` request to create a new book.

For the rest of the challenges, fork and clone the <a href="https://github.com/sf-wdi-24/ajax-book-app" target="_blank">ajax-book-app</a> repo.

1. Use AJAX to `GET` all the `books` from the API. Your first step should be to `console.log` the data from the API.
2. Use Handlebars templating to display all the books on the page.
3. Add a form to create a new book in `index.html`.
4. When a user submits the form, use AJAX to send a `POST` request to create a new book.
5. Use Handlebars templating to add the newly created book to the page. **Hint:** Our Handlebars template is for a *collection* (array) of data, so we can't use it to add just one book to the page. A way around this is to clear all the books from the page when a new book is added and re-render the template with the updated collection.
