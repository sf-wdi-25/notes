# Migrations and Associations

In this lesson we'll talk about changing the structure of the tables in the database; how tables relate to each other and how to manipulate and use table columns.


## Objectives

1. Be able to add/remove columns from the database.
1. Be able to explain when it is OK to edit a migration.
1. Understand the basics of how to alter an existing column.
1. Be able to create 1:n rails model relationships.



## Migrations

> Definition: In software engineering, schema migration (also database migration, database change management) refers to the management of incremental, reversible changes to relational database schemas. A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version. [1][1]

* Given that:
  * We cannot know the database table structures precisely when we begin the app.
  * The structure changes as business needs evolve.
  * We must not damage or lose production database records.
* Then we must make small changes to the database structure over time, .

Migrations give us the ability to make small and incremental changes to our database and to make those same changes to one or more production datasets.  


### Creating tables OR Rails Model review

```
rails g model talk topic:string duration:integer
```

The above command, you'll recall, creates 2 new files.  

1. app/models/talk.rb - a new Rails Model
1. db/migrate/1234566789_create_talks.rb - a database migration.

Typically we'll edit both of these files as needed to get the database structure we want and set any validations we want to run in the model.

Finally you of course must run `rake db:migrate`.  Then you commit the above files as well as the `db/schema.rb` file.

>Note: Never directly edit schema.rb

#### Practice 1

Let's say we're building a website to sell used cars.  We know we need a few basic things to keep track of our cars; things like:
* make
* model
* year

Let's write a migration to track these on a new **Car** model.  But first create a new rails app; from your dev directory: `rails new car_app -T -d=postgresql`.  (Of course you should CD into this app.)
>We are using the -T (aka --skip-test-unit) and -d postgresql (aka --database=postgresql) options today -- postgresql is our preferred database. We'll talk about tests another day.

<details><summary>What's the command to generate the new car model and migration?  Use make, model, and year as column names.</summary>
`rails g model car make:string model:string year:integer`
</details>

What does this give us?

Migration:
```ruby
class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year

      t.timestamps null: false
    end
  end
end
```

<details>
<summary>After generating this, what do we need to run?</summary>
`rake db:migrate`
</details>

This will also change the file `db/schema.rb` updating it to include the new table structure.

Afterwards you should commit your changes before moving on to work with this table.

### Migrations are forever

Once a migration has been merged into the master branch; it is **forever**.
<details>
<summary>But it's a little more complicated...</summary>
Above we said that once a migration is merged into master, it is permanent.  But really we need to think about the following:

1. preservation of production data
1. other developers

If your migration is run on any sort of staging or production environment and you don't, in ordinary practice, wipe that database, then that migration is set-in-stone.  Your top concern when writing a migration, is to not do any damage to production data.  Your users will never forgive you if you accidentally delete pictures of fluffy.

If other developers are already working with your migration (perhaps it was merged to a shared feature branch), then it is set-in-stone.  If you were to change your migration now they would have to update their branch to match and be very very certain that they did not accidentally introduce a different variation of your migration.

That being said, if your changes haven't reached anywhere else yet, you could still re-write your migration.
</details>

![](http://i.giphy.com/6KEr8zBleOFwI.gif)

After your changes have left your machine the only way to undo or redo is to _write a new migration_ to make the required changes.  Why?  

### Changing existing tables

In some cases we may already have a table but need to add a new column to it.  Alternatively we may want to remove an existing column.  How can we do this?

Rails has migration generators for this, using respectively "AddXXXToYYY" or "RemoveXXXFromYYY".  For both of these "XXX" is a column-name and "YYY" represents the model.  

Example:

`rails generate migration AddPartNumberToProducts`

This generates an empty migration with the name `AddPartNumberToProducts`.  After running this you can edit the new migration to properly set the "PartNumber" datatype (likely String or Integer).

```ruby
# generated empty migration
class AddPartNumberToProducts < ActiveRecord::Migration
  def change
  end
end
```
^ Not much there right? ^

**A Better way:** We can also tell rails on the command-line which data-types to use and it'll generate appropriate code.

Example:

* add a nickname column to the User model: `rails generate migration AddNicknameToUsers nickname:string`

This generates a migration like:

```ruby
class AddNicknameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :nickname, :string
  end
end
```

> Note: you can add multiple columns simultaneously.

We can also remove a column:

* remove street_address from User model: `rails generate migration RemoveStreetAddressFromUsers street_address:string`

This generates a migration like:

```rb
class RemoveStreetAddressFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :street_address, :string
  end
end
```
> Note: you must still specify the `column_name:datatype` when doing a remove.



#### Practice 2

Now let's say we've decided to add car _color_ to our model.  How can we do that?

* What datatype is color?

<details>
<summary>What is the terminal command to create the new migration to change the cars table?</summary>
`rails g migration AddColorToCars color:string`
</details>


### Undo

Previously we said that migrations are forever, but that really only applies once the change leaves our local machine.  We may make changes to the last migration if it hasn't left our local development environment yet, and that may require us to re-run the same migration.  How else could we test it?

We can rollback (reverse) a migration using the command:

`rake db:rollback`

Providing a step parameter allows us to rollback a specific number of migrations:

`rake db:rollback STEP=2` rollsback 2 migrations.


You can also use the date stamp on the migrations to migrate (up or down) to a specific version:

`rake db:migrate VERSION=20080906120000`

#### Practice 3

<details>
<summary>How can we reverse the last migration we ran? (the one to add color)</summary>
`rake db:rollback`
</details>

Once we've reversed that migration, let's delete it so we can make a new one.  `rm db/migrate/*add_color_to_cars.rb`

Now let's create a new migration that adds color and mileage as columns.

* What datatype is mileage?

<details><summary>What's the command to create a migration to add color and mileage to the Cars table?</summary>
`rails g migration AddDetailsToCars color:string mileage:decimal`

This generates:

```ruby
class AddDetailsToCars < ActiveRecord::Migration
  def change
    add_column :cars, :color, :string
    add_column :cars, :mileage, :decimal
  end
end
```

</details>

### Migration Rules:

* Never edit a migration once it is merged.
* Never edit the `schema.rb` file.  - This file should only change when you run `rake db:migrate`.
* Never alter the database structure without a migration.
* Always run all migrations before submitting code for merge.  You want `schema.rb` to be up to date.

### List of data-types

Basic list:

* :binary
* :boolean
* :date
* :datetime
* :decimal
* :float
* :integer
* :primary_key
* :references
* :string
* :text
* :time
* :timestamp

See http://stackoverflow.com/questions/17918117/rails-4-datatypes


> Note: 90% of the time prefer *decimal* over *float* [2][2]
> Note: Prefer *text* over *string* if on postgresql (maybe).  Otherwise prefer *string* over *text* when your data is definitely always less than 255.  [3][3]
> Note: prefer datetime unless you have a specific reason to use one of the others.  ActiveRecord has extra tools for datetime


### Other commands

* `rake db:schema:load` - setup the database structure using schema.rb (may be faster when you have hundreds of migrations)
* `rake db:setup` - similar to `rake db:create db:migrate db:seed`
* rake db:drop - destroy the database (if you run this in production you're FIRED!)


## ActiveRecord Associations

Objectives

1. Create one-to-many relationships in Rails
1. Modify migrations to add foreign keys to tables
1. Create model instances with associations

### Associations: Relationships Between Models

| Relationship Type | Abbreviation | Description | Example |
| :--- | :--- | :--- | :--- |
| One-to-One | 1:1 | An instance of one model is associated with one (and only one) instance of another model | One author can have one mailing address. |
| One-to-Many | 1:N | Parent model is associated with many children from another model | One author can have many books. |
| Many-to-Many | N:N | Two models that can both be associated with many of the other. | Libraries and books. One library can have many books, while one book can be in many libraries. |

### One-To-Many (1:N) Relationship

**Example:** One owner `has_many` pets and a pet `belongs_to` one owner (our `Pet` model will have a foreign key (FK) `owner_id`). The foreign key always goes on the table with the data that belongs to data from another table. In this example, a person **has_many** pets, and a pet **belongs_to** a person. The foreign key `person_id` goes on the `pets` table to indicate which person the pet belongs to.

![](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/primary_foreign_key.png)

**Always remember!** Whenever there is a `belongs_to` in the model, there should be a *FK in the matching migration!*

![](https://chryus.files.wordpress.com/2014/02/img_1839.jpg)

#### 2-steps to setting up relationships in rails

Rails requires us to do two things to establish a relationship.  

1. database - create the foreign key
2. rails models - tell rails about the relationship

**First: Database** we need to add an `other_id` column in the database.  

This column belongs on the model that **belongs_to** the parent model.  When populated this will contain the id of the parent model.

This is a database change so it means we're going to write a migration (or edit one we're already writing).  We'll add something like the following to our migration:

```ruby
# we're editing an existing create_table migration to add this field - it HAS NOT BEEN committed to master yet
create_table :pets do |t|
  # You ONLY need to add ONE OF THESE THREE to your new migration
  t.integer :owner_id
  # OR...
  t.references :owner
  # OR...
  t.belongs_to :owner
end
```

<details><summary>What's the difference between `t.integer`, `t.references`, and `t.belongs_to`?</summary>

* `t.integer :owner_id` is technically accurate since the column name should be `owner_id` and database IDs are integers.
* `t.references :owner` is a bit more semantic and readable and has a few bonuses:

  1. It defines the name of the foreign key column (in this case, `owner_id`) for us.
  2. It adds a **foreign key constraint** which ensures **referential data integrity**[4][4]  in our Postgresql database.

**But wait, there's more...**

We can actually get even more semantic and _rail-sy_ and say:

`t.belongs_to :owner`

This will do the same thing as `t.references`, but it has the added benefit of being super semantic for anyone reading your migrations later on.
</details>


**Second: Ruby** we have to establish the relationship in the rails models themselves.  That means adding code like:

```ruby
class Owner < ActiveRecord::Base
  has_many :pets  # note has_many uses plural form
end

class Pet < ActiveRecord::Base
  belongs_to :owner
end
```

Note: `belongs_to` uses the singular form of the class name (`:owner`), while `has_many` uses the pluralized form (`:pets`).

But if you think about it, this is exactly how you'd want to say this in plain English. For example, if we were just discussing the relationship between pets and owners, we'd say:

  - "One owner has many pets"
  - "A pet belongs to an owner"


This makes rails aware of the relationship and ActiveRecord will make it easy for us to do things in the console or in our code that make use of this relationship.



### Wading in Deeper: Using our Associations

First things first, we need to create our models, run our migrations, do all things necessary to [setup our database](https://github.com/sf-wdi-21/notes/tree/master/week-07/day-01-models-auth/dawn-models#the-database-dance).

Let's run:

```console
rake db:create
rake db:migrate
```

Now, let's jump into our rails console by typing `rails c` at a command prompt, and check out how these new associations can help us define relationships between models:

```ruby
Pet.count
Owner.count
fido = Pet.create(name: "Fido")
lassie = Pet.create(name: "Lassie")
nathan = Owner.create(name: "nathan")
nathan.pets
fido.owner
nathan.pets << fido # Makes "fido" one of my pets
nathan.pets << lassie # Makes "lassie" another one of my pets
nathan.pets.size
nathan.pets.map(&:name)
nathan.pets.each {|x| puts "My pet is named #{x.name}!"}
fido.owner

# What's going to be returned when we do this?
fido.owner.name
```

Remember: We just saw that in Rails, we can associate two model **instances** together using the `<<` operator.

---

#### Wait!!!! What if I forget to add a foreign key before I first run `rake db:migrate`?

If you were to make the mistake of running `rake db:migrate` before adding a foreign key to the table's migration, it's ok. There's no need to panic. You can always fix this by creating a new migration.  This will be a change migration rather than creating a new table.

```console
rails generate migration AddOwnerReferenceToPets owner:references
```
OR
```console
rails generate migration AddOwnerReferenceToPets owner:belongs_to
```

...and then verify that the migration looks something like the following:

```ruby
class AddOwnerReferenceToPets < ActiveRecord::Migration
  def change
    add_reference :pets, :owner, index: true, foreign_key: true
  end
end
```

Make sure you then update the models with the appropriate `has_many` and `belongs_to` relationships.  


[1]: https://en.wikipedia.org/wiki/Schema_migration
[2]: http://stackoverflow.com/questions/8514167/float-vs-decimal-in-activerecord
[3]: http://stackoverflow.com/questions/3354330/difference-between-string-and-text-in-rails
[4]: https://en.wikipedia.org/wiki/Referential_integrity
