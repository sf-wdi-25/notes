# Objectives
*After this lesson, students will be able to:*

- Describe how layouts, templates & views work together
- Use partials for static content and rendering dynamic content
- Be familiar with several basic view helper methods
- Be familiar with rails form helpers

# Layouts and Partials

* Layouts can be seen as the container for a view.  Each view is rendered within a container.  We can use these for common header/footer material.
* Partials are used to DRY views.  We can use them to move code that is repeated in several views to a separate _partial_ file.

When the app is created, Rails will automatically add a layout `application.html.erb` in `app/views/layouts/application.html.erb`. This layout already contains a yield statement and all the links to css and js files in the head part of the html document.

## Using views with Rails

In Rails, the logic for rendering a view is quite straightforward. Given that every route in Rails will execute a method inside a controller, when the method is executed, Rails will look for:

1. A folder inside `views` corresponding to the controller's name (folder `posts` for `PostsController`).
2. A file with the method's name and `.html.erb`.

For example , if we call `http://localhost:3000/posts`, Rails will execute the method `index` in the controller `posts` and then look for a template located in `app/views/posts/index.html.erb`.  By default controller methods will render views files that match the controller method name.

In some cases though, you may want to render a template with a different name than the current method. Lets take a look at this action:

```ruby
def create
  @post = Post.new(post_params)

  respond_to do |format|
    if @post.save
      format.html { redirect_to @post, notice: 'Post was successfully created.' }
      format.json { render :show, status: :created, location: @post }
    else
      format.html { render :new }
      format.json { render json: @post.errors, status: :unprocessable_entity }
    end
  end
end
```

Based on the result of `@post.save`, the method will execute either the code in the `if` or in the `else`.  The code `format.html` or `format.json` means that Rails will understand the format asked for by the user, whether HTML or JSON.  For the moment, we will only look at the lines starting with `format.html`.

You can see that depending upon whether `@post` correctly saves, the `new` page will be rendered or the response will be a redirect.  Neither one of these renders a `create.html.erb` file.

Rails will, _by default_, render the template that has the same name as the current controller method. But, **if** there is a `render` statement in the method, Rails will use whatever view is specified by that method.

Let's take a look at a few different ways of calling render:

> Note: Review and explain each of the render functions below.

```ruby
render :edit
render action: :edit
render "edit"
render "edit.html.erb"
render action: "edit"
render action: "edit.html.erb"
render "books/edit"
render "books/edit.html.erb"
render template: "books/edit"
render template: "books/edit.html.erb"
render "/path/to/rails/app/views/books/edit"
render "/path/to/rails/app/views/books/edit.html.erb"
render file: "/path/to/rails/app/views/books/edit"
render file: "/path/to/rails/app/views/books/edit.html.erb"
```

## Integrating Layouts - Codealong (30 mins)

Create a new Rails app "views_and_layouts" and scaffold the resource posts:

```bash
rails new views_and_layouts
cd views_and_layouts
rails g scaffold Post title content:text
rake db:migrate
```

Open the posts controller and look at how each method renders the templates: some of them, like index and show, are abstract because the name of the template is the name of the method, but for some other methods, like create or update, we need to explicitly tell Rails what to do at the end of the method.

### Different Layouts

By default, Rails will render the layout `application.html.erb`, but sometimes, you want to render a template using a different layout.

For instance, let's create a layout called `sidebar.html.erb`

```bash
touch app/views/layouts/sidebar.html.erb
```

Take this template and add it into `sidebar.html.erb`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Sidebar Template</title>
</head>
<body>
  <header>
    <h1>My Website</h1>  
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
      <li>Menu 4</li>
    </ul>
  </header>
  <main>
    <%= yield %>
  </main>
  <footer>
    <ul>
      <li>About us</li>
      <li>Team</li>
      <li>Terms and conditions</li>
    </ul>
  </footer>
</body>
</html>
```

This will help us to differentiate the layouts.

In the controller method `index`, add this to the end of the method:

```ruby
render layout: "sidebar"
```

This line will just tell Rails to use the same logic of template rendering, but instead of using the default `application.html.erb`, it will render the template inside `sidebar.html.erb`.

## Partials

A best practice is to always keep every template as small as possible. A rule of thumb would be to keep templates shorter than about 50 lines.  This helps to improve readability.  We can use partials to do this as they allow us to take portions of the template and move them into separate files.  This is particularly useful when you have content that is repeated on more than one page associated with a controller.

* Partials are always named starting with an underscore: `_form.html.erb`
* Partials can be called directly from inside a view file.  `<%= render "menu" %>`
* You can pass data to a partial: `<%= render partial: "customer", object: @new_customer %>`


### Using partials and layouts

If your website is structured like:
```
  -----    header with menu      -----
  -----    current page content  -----
  -----    current page content  -----
  -----    current page content  -----
  -----    footer                -----
```

Then we should probably move the top menu and the footer into the layout.  This leaves us with templates that look like:

```
-----    current page content  -----
-----    current page content  -----
-----    current page content  -----
```

and a layout that looks like:

```
  -----    header with menu      -----
  -----    yield                 -----
  -----    footer                -----
```
That `yield` is where the current page content will be rendered.

Another alternative would be to move the _header with menu_ into a partial instead.  This option would be best when for example we only use the menu on some pages, but not all.

Likewise if we have a couple of views that are using the same form code or have the same submenu or other HTML code we should consider moving that code into a partial.  Example:

```
# new.html.erb
-----  new instructions text  -----
-----  form                   -----
-----  form                   -----
-----  form                   -----
-----  other info             -----

# edit.html.erb
-----  edit instructions text -----
-----  form                   -----
-----  form                   -----
-----  form                   -----
```

In the above case it would be very common to take the `form` out of both pages and put it inside a partial.  Result:

```
# new.html.erb
-----  new instructions text  -----
-----  render :form           -----
-----  other info             -----

# edit.html.erb
-----  edit instructions text -----
-----  render :form           -----
```

Much DRYer!

### Exercise

Let's practice moving a menu into a partial.

Create a new file:

```bash
mkdir app/views/application
touch app/views/application/_header.html.erb
```

And inside move the following from `sidebar.html.erb`:

```erb
<header>
  <h1>My Website</h1>  
  <ul>
    <li>Menu 1</li>
    <li>Menu 2</li>
    <li>Menu 3</li>
    <li>Menu 4</li>
  </ul>
</header>
```

Now let's create another file:

```bash
touch app/views/application/_footer.html.erb
```

And inside move the following from `sidebar.html.erb`:

```erb
<footer>
  <ul>
    <li>About us</li>
    <li>Team</li>
    <li>Terms and conditions</li>
  </ul>
</footer>
```

Now the main `sidebar.html.erb` file is back to a normal size, we just need to include the partials and the final result will then be the same than before.

**Note:** Every partial needs to have an underscore as the first character - this way Rails knows that it is not a proper template but only a partial that will be included in a template.

Let's now call the partials in the layout:

```erb
<!DOCTYPE html>
<html>
<head>
  <title>Sidebar Template</title>
</head>
<body>
  <%= render "header" %>
  <main>
    <%= yield %>
  </main>
  <%= render "footer" %>
</body>
</html>
```

Rails will automatically look in the folder `app/views/application/` for a file that is called by the name given to the method `render` with an underscore prefix.



# basic view helpers



# form helpers
