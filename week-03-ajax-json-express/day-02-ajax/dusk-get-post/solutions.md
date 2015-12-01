## Solutions - AJAX: GET & POST


#### Postman

1. Use Postman to `GET` all the `books`. Make a note of their `_id`s.

    ![get all the books screenshot](https://cloud.githubusercontent.com/assets/7833470/10987367/84e1849a-83e7-11e5-862b-5d03d0b119f1.png)

2. Now get just one book by `_id`.

    ![get book by id screenshot](https://cloud.githubusercontent.com/assets/1489337/11511569/b1076512-981e-11e5-9ea2-cf5b66c8ac75.png)

3. Use Postman to send a `POST` request to create a new book:
    - set `author` to YOUR-NAME, and make up values for the other fields.
    - What does your response data look like? What is the "id" of your book?
    
    ![post a new book screeshot](https://cloud.githubusercontent.com/assets/1489337/11511728/941382a0-981f-11e5-8990-df46033edf1e.png)

4. How would you request your book, using your id?
    - `GET /books/your-book-id`

5. How would you update your book to change the releaseDate to your birthdate?
    
    ![update releaeData on book screenshot](https://cloud.githubusercontent.com/assets/1489337/11511928/8dafe4e8-9820-11e5-8056-36b99ed889c9.png)

6. How would you delete your book?
    - `DELETE /books/your-book-id`


#### AJAX Book App

<a href="https://github.com/sf-wdi-25/ajax-crud-book-app/branches" target="_blank">ajax-book-app (solution branches 1 & 2)</a>
