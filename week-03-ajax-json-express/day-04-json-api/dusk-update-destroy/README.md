# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> CRUD API: Update & Destroy

| Objectives |
| :--- |
| Explore request specs (tests) for UPDATE and DELETE |
| Implement Express routes to UPDATE and DELETE data |

Please continue with the [Todo API Lab](https://github.com/sf-wdi-25/test-driven-todo-api). The notes below are for reference only.

## Testing Update & Delete

[Testing Setup Steps](./../module-01/#testing-setup)

#### Example Request Spec: Update

```js
/*
 * blobsTest.js
 */

...

describe('Blobs', function() {

  ...

  it('should update a SINGLE blob on PUT /blobs/:id', function (done) {
    request(baseUrl + '/blobs', function (error, response, body) {
      var allBlobs = JSON.parse(body).blobs;
      var singleBlob = allBlobs[allBlobs.length - 1];
      request.put(
        {
          url: '/blobs' + singleBlob._id,
          form: {
            name: 'WDI 24',
            location: 'SF'
          }
        },
        function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });
  });

});
```

#### Example Request Spec: Delete

```js
/*
 * blobsTest.js
 */

...

describe('Blobs', function() {

  ...

  it('should delete a SINGLE blob on DELETE /blobs/:id', function (done) {
    request(baseUrl + '/blobs', function (error, response, body) {
      var allBlobs = JSON.parse(body).blobs;
      var singleBlob = allBlobs[allBlobs.length - 1];
      request.del(baseUrl + '/blobs' + singleBlob._id, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

});
```

#### Testing Resources

* <a href="http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.Vjyor66rSRs" target="_blank">Testing Node.js with Mocha and Chai</a> - Note the syntax of the tests in this article is a little different than what we're using. This is because they're using `chai-http` instead of `request` and `chai.should` instead of `chai.expect`. There are many different ways of putting together testing frameworks to build a testing stack, but no matter the stack, the logic behind the tests translates.
* <a href="http://mochajs.org" target="_blank">Mocha</a> - framework for running tests
* <a href="http://chaijs.com/api" target="_blank">Chai</a> **(expect)** - for *expect* assertions
* <a href="https://github.com/request/request" target="_blank">Request</a> - for handling HTTP requests and responses


## Todo API: Step by Step - Create & Read Routes

### `todos#update`

1. <details>
    <summary>Create a server route to handle the `PUT` request.</summary>
    ```js
    app.put('/api/todos/:id', function update(req, res) {
        // Where would you find the new/updated data for the todo?
    });
    ```
</details>

2. <details>
    <summary>Get the todo id from the URL params and save it to a variable.</summary>
    ```js
    app.put('/api/todos/:id', function update(req, res) {
      var todoId = parseInt(req.params.id);
      // How would you find the corresponding todo?
    });
    ```
</details>

3. <details>
    <summary>Use the id to find the todo we want to update (remember, we don't have a persistent database yet, so we're using an array called `todos` to represent our "database"). **Hint:** This is a good opportunity to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">filter</a>.</summary>
    ```js
    app.put('/api/todos/:id', function update(req, res) {
      var todoId = parseInt(req.params.id);

      var todoToUpdate = todos.filter(function (todo) {
        return todo._id == todoId;
      })[0];

      // How would you update the todo with the new values?
    });
    ```
</details>

4. <details>
    <summary>Update the todo's task and description.</summary>
    ```js
    app.put('/api/todos/:id', function update(req, res) {
      var todoId = parseInt(req.params.id);

      var todoToUpdate = todos.filter(function (todo) {
        return todo._id == todoId;
      })[0];

      todoToUpdate.task = req.body.task;
      todoToUpdate.description = req.body.description;

      // What do you send back to the client?
    });
    ```
</details>

5. <details>
    <summary>Respond with the updated todo.</summary>
    ```js
    app.put('/api/todos/:id', function update(req, res) {
      var todoId = parseInt(req.params.id);

      var todoToUpdate = todos.filter(function (todo) {
        return todo._id == todoId;
      })[0];

      todoToUpdate.task = req.body.task;
      todoToUpdate.description = req.body.description;

      res.json(todoToUpdate);
    });
    ```
</details>

### `todos#delete`

1. <details>
    <summary>Create a server route to handle the `DELETE` request.</summary>
    ```js
    app.delete('/api/todos/:id', function destroy(req, res) {
        // How do you know which todo to delete?
    });
    ```
</details>

2. <details>
    <summary>Get the todo id from the URL params and save it to a variable.</summary>
    ```js
    app.delete('/api/todos/:id', function destroy(req, res) {
      var todoId = parseInt(req.params.id);
      // How would you find the todo with that id?
    });
    ```
</details>

3. <details>
    <summary>Use the id to find the todo we want to delete.</summary>
    ```js
    app.delete('/api/todos/:id', function destroy(req, res) {
      var todoId = parseInt(req.params.id);

      var todoToDelete = todos.filter(function (todo) {
        return todo._id == todoId;
      })[0];

      // How would you delete the matching todo?
    });
    ```
</details>

4. <details>
    <summary>Remove the todo from our "database" (`todos` array). **Hint:** This is a good opportunity to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">splice</a>.</summary>
    ```js
    app.delete('/api/todos/:id', function destroy(req, res) {
      var todoId = parseInt(req.params.id);

      var todoToDelete = todos.filter(function (todo) {
        return todo._id == todoId;
      })[0];

      todos.splice(todos.indexOf(todoToDelete), 1);

      // What do you send back to the client?
    });
    ```
</details>

5. <details>
    <summary>Respond with the deleted todo.</summary>
    ```js
    app.delete('/api/todos/:id', function destroy(req, res) {
      var todoId = parseInt(req.params.id);

      var todoToDelete = todos.filter(function (todo) {
        return todo._id == todoId;
      })[0];

      todos.splice(todos.indexOf(todoToDelete), 1);

      res.json(todoToDelete);
    });
    ```
</details>


## Challenges

Continue working on your [Todo API](https://github.com/sf-wdi-25/test-driven-todo-api) from this morning. Make sure your routes for `CREATE` and `READ` are working (and the relevant tests are passing) before you move on to `UPDATE` and `DELETE`.

## Resources

* <a href="http://expressjs.com/api.html#req" target="_blank">Express Request Docs</a>
* <a href="http://expressjs.com/api.html#app.put.method" target="_blank">Express app.put()</a>
* <a href="http://expressjs.com/api.html#app.delete.method" target="_blank">Express app.delete()</a>
