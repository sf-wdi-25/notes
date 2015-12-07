
## Challenges

**Setting up an Embedded Model**

1. Write a file called `post.js` that has a post model with an attribute `comments` that contains an embedded comment schema.

**Writing User/Tweets Routes**

The following challenges are psuedo code. Write a method for each example.

Here's an example where **Monsters have many Broods**:

Example: Write a route to create a new Monster.

  ```js
    app.post('/monsters', function(req, res) {
      var monster = req.body.monster;
      Monster.create(monster, function (err, monster) {
        res.status(200).json(monster);
      });
    });
  ```

Example: Write a route to create a new Brood that belongs to a Monster.

  ```js
    app.post('/monsters/:id/broods', function(req, res) {
      Monster.findById(req.params.id, function(err, monster) {
        var brood = req.body.brood;
        monster.brood.push(brood);
        monster.save(function(err) {
          res.status(200).json(brood);
        });
      });
    });
  ```

In the following challenges imagine that **Users have many Tweets**

2. Write a route to create a new User.
3. Return an array of all the users.
4. Return an array of all tweets of a specific user.
5. Create a new post that belongs to a user (who's id is in the `req.params.id`).
6. Delete a post that belongs to a user (make sure to build the route to include the user and the post's id's - see example above).
7. Update a post that belongs to a user (ditto on their id's!).
