# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60">  Mongo & Mongoose
| Objectives |
| :--- |
| Traverse a MongoDB using the command line interface (CLI). |
| Connect to MongoDB using Mongoose within your application. |

## Review: What are Mongo and Mongoose?

<img src="http://i.imgur.com/MVaVKG8.gif" />

There are two main categories of databases: relational (SQL) databases, and non-relational (no-SQL) databases. Mongo is a no-SQL database that stores entries in a JSON-like format.

Since Mongo is the first database we've worked with it's hard for us to discuss the tradeoffs between SQL/no-SQL. But here's a great analogy from a fellow on StackOverflow:
> "NoSQL databases store information like you would recipes in a book. When you want to know how to make a cake, you go to that recipe, and all of the information about how to make that cake (ingredients, preparation, mixing, baking, finishing, etc.) are all on that one page.
>
> SQL is like shopping for the ingredients for the recipe. In order to get all of your ingredients into your cart, you have to go to many different aisles to get each ingredient. When you are done shopping, your grocery cart will be full of all the ingredients you had to run around and collect.
>
> Wouldn’t it be nicer if there was a store that was organized by recipe, so you could go to one place in the store and grab everything you need from that one spot? Granted you’ll find ingredients like eggs in 50 different places, so there’s a bit of overhead when stocking the shelves, but from a consumer standpoint it would be much easier/faster to find what they're looking for."

-<a href="http://stackoverflow.com/questions/14428069/sql-and-nosql-analogy-for-the-non-technical/14428221#14428221" target="_blank">mgoffin, Jan 20 '13 at 19:15</a>

`MongoDB` is a no-SQL database. `Mongoose` is a library or "wrapper" that gives us a bunch of convenience methods for working with MongoDB records (kind of like jQuery's convenience methods for manipulating the DOM). Generally we will not be interacting _directly_ with MongoDB, instead we'll be working with `mongoose`.

## Mongo & Mongoose setup

1. Assuming you already have MongoDB installed, to get started using mongoose in a project, we have to install it in our `package.json`:

```bash
  npm install --save mongoose
```

2. Next we need to `require` Mongoose in our project and `connect` to the MongoDB service (it could be local or hosted). We can do this in `server.js` for now. Later we'll do it in `models/index.js`.

```js
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/todo-app-demo');
```

  <details>
    <summary>What's a connection string?</summary>
    `mongodb://localhost/todo-app-demo` is a string formatted by specifications provided by the Mongoose package in order to connect to a MongoDB database on your local system named `todo-app-demo`. You can name it whatever you like and it will be created as soon as you save some data to it.
  </details>

3. Finally, we need to run the MongodDB service. Generally you will want it open in a separate tab, running in the background.

```bash
  mongod
```

  **Note:** If you already have an instance of MongoDB running, you'll get an error at this step. If that's the case, you can move on to the next step, since MongoDB is already running!

Running your MongoDB service is no different from running your Express Server!

## Express/MongoDB Integration
Once you've finished the above steps, here's how you would set up an Express application with a "Todo" model (so we can start CRUDing todos!).

1. In your Express application, create a folder called `models` with a file for your first model. In the example, we have a `Todo` model, so the filename is `todo.js`. Your folder structure should look similar to this:

  ```
  | your-app-name
    | models
      - todo.js
    | public
      | scripts
        - main.js
      | styles
        - main.css
    | views
      - index.html
    - .gitignore
    - package.json
    - readme.md
    - server.js
  ```

2. <details>
  <summary>In your model file (e.g. `todo.js`), create the model schema, and export it so that you can require it in other parts of your app.</summary>
  ```js
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var TodoSchema = new Schema({
    task: String,
    description: String
  });

  var Todo = mongoose.model('Todo', TodoSchema);

  module.exports = Todo;
  ```
</details>

3. <details>
  <summary>In `server.js`, require your model.</summary>
  ```js
  var Todo = require('./models/todo');
  ```
</details>

## CRUD Operations with Mongoose

#### Get all todos: `.find()`

<details>
  <summary>We can use <a href="http://mongoosejs.com/docs/api.html#model_Model.find"  target="_blank">.find()</a> to get all documents in the collection.</summary>
  ```js
  // get all todos
  app.get('/api/todos', function (req, res) {
    // find all todos in db
    Todo.find(function (err, allTodos) {
      res.json({ todos: allTodos });
    });
  });
  ```

  **Note:** We can also use `.find()` to get a specific set of documents in the collection (rather than ALL documents) by setting conditions. Read more <a href="http://mongoosejs.com/docs/api.html#model_Model.find"  target="_blank">in the docs</a>.
</details>

#### Create new todo: `new` and `.save()`

<details>
  <summary>We've seen the `new` keyword before! It creates new instances of an object. We use it here to create new instances of our `Todo` model. We then call `.save()` to store the new todo in our database.</summary>
  ```js
  // create new todo
  app.post('/api/todos', function (req, res) {
    // create new todo with form data (`req.body`)
    var newTodo = new Todo(req.body);

    // save new todo in db
    newTodo.save(function (err, savedTodo) {
      res.json(savedTodo);
    });
  });
  ```
</details>

#### Get one todo: `.findOne()`

<details>
  <summary>We can use <a href="http://mongoosejs.com/docs/api.html#query_Query-findOne">.findOne()</a> to return the first document in the collection that matches certain criteria. In this case, we're looking for a todo that has a certain `_id`.</summary>
  ```js
  // get one todo
  app.get('/api/todos/:id', function (req, res) {
    // get todo id from url params (`req.params`)
    var todoId = req.params.id;

    // find todo in db by id
    Todo.findOne({ _id: todoId }, function (err, foundTodo) {
      res.json(foundTodo);
    });
  });
  ```

  **Note:** The <a href="http://mongoosejs.com/docs/api.html#model_Model.findById" target="_blank">.findById()</a> method will also return a single document matching a specified id field.
</details>

#### Update todo: `.findOne()` and `.save()`

<details>
  <summary>Similar to the last example, we can use `.findOne()` to find the document with a certain `_id`. After updating the document, we use `.save()` to persist our changes to the database.</summary>
  ```js
  // update todo
  app.put('/api/todos/:id', function (req, res) {
    // get todo id from url params (`req.params`)
    var todoId = req.params.id;

    // find todo in db by id
    Todo.findOne({ _id: todoId }, function (err, foundTodo) {
      // update the todos's attributes
      foundTodo.task = req.body.task;
      foundTodo.description = req.body.description;

      // save updated todo in db
      foundTodo.save(function (err, savedTodo) {
        res.json(savedTodo);
      });
    });
  });
  ```
</details>

#### Delete todo: `.findOneAndRemove()`

<details>
  <summary>The <a href="http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove" target="_blank">.findOneAndRemove()</a> method takes care of finding the document with a certain `_id` and removing it from the database.</summary>
  ```js
  // delete todo
  app.delete('/api/todos/:id', function (req, res) {
    // get todo id from url params (`req.params`)
    var todoId = req.params.id;

    // find todo in db by id and remove
    Todo.findOneAndRemove({ _id: todoId }, function (err, deletedTodo) {
      res.json(deletedTodo);
    });
  });
  ```
  **Note:** Another way to remove the document is by finding the document first (using `.findOne()` or  `.findById()`) and calling <a href="http://mongoosejs.com/docs/api.html#model_Model.remove" target="_blank">`.remove()`</a>.
</details>


## Exploring the MongoDB Shell

In addition to the Javascript methods for using MongoDB, MongoDB also comes with a Command Line Interface (CLI), "console", or "shell" that allows us to explore our databases and data. You can launch the shell by typing:

```bash
  mongo
```

You can close the shell by typing:

```bash
exit
```

You can learn more about shell commands by typing `help`.

Some common commands are:

```bash
show dbs        # List All Databases
db              # Show Current Databse
use db_name     # Select a Database
```


## MongoDB Shell Methods
The MongoDB shell also comes with its own set of commands for CRUDing database records.

Assuming that our database has a `Users` model or a `Users` resource, we can:

#### Create
``` js
// save one user
$ db.users.save({ name: 'Chris' });

// save multiple users
$ db.users.save([{ name: 'Chris'}, { name: 'Holly' }]);
```

#### Read
``` js
// show all users
$ db.users.find();

// find a specific user
$ db.users.find({ name: 'Holly' });
```

#### Update
``` js
db.users.update({ name: 'Holly' }, { name: 'Holly Lloyd' });
```

#### Delete
``` js
// remove all
db.users.remove({});

// remove one
db.users.remove({ name: 'Holly' });
```

More Shell Methods:
https://docs.mongodb.org/manual/reference/method/

#### Robomongo: The MongoDB GUI
Exploring your databases with the MongoDB shell can be a chore. Robomongo is a free application that can make it a little easier on you: [Setting up Robomongo](https://scotch.io/tutorials/an-introduction-to-mongodb#gui-tool:-robomongo).


## Challenges

Please head on over to the [Mongo TV Drills Lab](https://github.com/sf-wdi-25/mongo_tv_drills) - [solution] (https://github.com/sf-wdi-25/mongo_tv_drills/tree/solution)

## Resources

* [Scotch Tutorial: Intro to MongoDB](https://scotch.io/tutorials/an-introduction-to-mongodb)
* [MongoDB Shell Commands](https://docs.mongodb.org/manual/reference/mongo-shell/)
* [MongoDB CRUD Tutorials](https://docs.mongodb.org/manual/applications/crud/)
* <a href="http://mongoosejs.com/docs/api.html#model_Model.find" target="_blank">.find()</a>
* <a href="http://mongoosejs.com/docs/api.html#query_Query-findOne" target="_blank">.findOne()</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.findById" target="_blank">.findById()</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove" target="_blank">.findOneAndRemove()</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.remove" target="_blank">.remove()</a>
