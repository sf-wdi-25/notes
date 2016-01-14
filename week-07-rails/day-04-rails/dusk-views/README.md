# Objectives
*After this lesson, students will be able to:*

- Describe how layouts, templates & views work together
- Use partials for static content and rendering dynamic content
- Use link_to
- Work with rails form helpers

# External resources

The following is used along with this lesson:
* [Glossary](glossary.md)
* [view helpers demo app](https://github.com/tgaff/view_helpers_demo_app)
* [Lab](https://github.com/sf-wdi-25/rails_partials_helpers)
* [FormBuilder docs](http://apidock.com/rails/ActionView/Helpers/FormBuilder)
* [Custom View Helpers](http://www.rails-dev.com/custom-view-helpers-in-rails-4)

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

# Layouts

Layouts wrap views.  They are typically used for content that you want to appear on many/all pages on a site.  For example, every page needs the css and javascript files to be included, so we put that in the layout.  Similarly if you're using bootstrap you may have a `<div class='container'>` that you put all the content into.  We can put that `div` into the layout as well.  

* This helps keep our views DRY - we don't repeat common content in each file.

Create a new Rails app "views_and_layouts" and scaffold the resource posts:

## Integrating Layouts - Codealong

```bash
rails new views_and_layouts
cd views_and_layouts
rails g scaffold Post title content:text
rake db:migrate
```

Open the posts controller and look at how each method renders the templates: some of them, like index and show, are abstract because the name of the template is the name of the method, but for some other methods, like create or update, we need to explicitly tell Rails what to do at the end of the method.

### Different Layouts

By default, Rails will render the layout `application.html.erb`, but sometimes, you want to render a template using a different layout.

#### Example

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


# Partials

A best practice is to always keep every template as small as possible. A rule of thumb would be to keep templates shorter than about 50 lines.  This helps to improve readability.  We can use partials to do this as they allow us to take portions of the template and move them into separate files.  This is particularly useful when you have content that is repeated on more than one page associated with a controller.

* Partials are always named starting with an underscore: `_form.html.erb`
* Partials can be called directly from inside a view file.  `<%= render "menu" %>`
* You can pass data to a partial: `<%= render partial: "customer", object: @new_customer %>`

### Calling partials

Render a partial in the current views directory named `_product.html.erb`
```erb
<%= render "product" %>
```

Render a partial in `shared/_footer.html.erb`
```erb
<%= render "shared/footer" %>
```

Pass a variable `product` to a partial to be used within the partial:

```erb
<% @products.each do |product| %>
  <%= render partial: "product", locals: {product: product} %>
<% end %>
```

Rails will automatically choose a partial that matches the model name if you pass it an instance of a model.  In the following it will look for an `_product.html.erb` file to render.

```erb
<%= render @product %>
```

Partials can make use of a layout:
```erb
<%= render partial: "link_area", layout: "graybar" %>
```

When a partial is called with a `:collection`, the individual instances of the partial have access to the member of the collection being rendered via a variable named after the partial. In this case, the partial is _product, and within it you can refer to product to get the collection member that is being rendered.

```erb
<%= render partial: "product", collection: @products %>
```

### Using partials and layouts

Within a layout the partial is inserted at the `<%= yield %>`

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

# _form.html.erb
-----  form                   -----
-----  form                   -----
-----  form                   -----
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

Now the main `sidebar.html.erb` file is back to a normal size, we just need to include the partials and the final result will then be the same as before.

**Note:** Every partial filename needs to have an underscore as the first character - this way Rails knows that it is not a proper template but only a partial that will be included in a template.

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



# Basic View Helpers

Rails provides a huge swath of helpers designed to make generating HTML and especially HTML related to your models more convenient.  They also reinforce the "rails-way" conventions by automatically setting html class and id attributes.  We won't cover all of them here so make sure [you do some reading](http://guides.rubyonrails.org/action_view_overview.html#overview-of-helpers-provided-by-action-view) [and maybe read the docs too](http://api.rubyonrails.org/classes/ActionView/Helpers.html).  Don't forget about [URLHelper](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to).

#### `div_for`

Generates a div that automatically assigns the id attribute to match the passed in object `id`.

```erb
<%= div_for(@article, class: "frontpage") do %>
  <td><%= @article.title %></td>
<% end %>
```
Renders:
```
<div id="article_1234" class="article frontpage">
  <td>Hello World!</td>
</div>
```
> Note how this automatically set a class and id.

* `content_tag_for` is similar but can be used for other tags.

## Using Assets and URL Named Helpers

In many cases production assets are not served from the same paths as assets in dev/test.  Using the helpers allows Rails to handle this _detail_ for you. There are also helpers for javascript and stylesheet assets

#### `image_tag`

```erb
image_tag("icon.png") # => <img src="/assets/icon.png" alt="Icon" />
```


#### [`link_to`](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to)
Generates an `a` tag (anchor link).

```rb
link_to "Profile", profile_path(@profile)
# => <a href="/profiles/1">Profile</a>
```

Setting class and id:
```ruby
link_to "Articles", articles_path, id: "news", class: "article"
# => <a href="/articles" class="article" id="news">Articles</a>
```

> Hint: run `rake routes` and look at the Prefix column to see what `_path` url helpers are available.


#### [`button_to`](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-button_to)
Very similar to `link_to` but may generate a form

```rb
<%= button_to "New", action: "new" %>
# => "<form method="post" action="/controller/new" class="button_to">
#      <input value="New" type="submit" />
#    </form>"
```


#### `form_tag`

Form helpers are one of the largest classes of view helpers that Rails provides.  Get to know these well.
Rails form helpers help to manage the use of `id`, `name` and HTTP method for your forms.

```erb
<%= form_tag("/search", method: "get") do %>
  <%= label_tag(:q, "Search for:") %>
  <%= text_field_tag(:q) %>
  <%= submit_tag("Search") %>
<% end %>
```

```html
<form accept-charset="UTF-8" action="/search" method="get">
  <input name="utf8" type="hidden" value="&#x2713;" />
  <label for="q">Search for:</label>
  <input id="q" name="q" type="text" />
  <input name="commit" type="submit" value="Search" />
</form>
```

In the above:

* note how `:q` is sufficient to set which field the label is for and the `id` and `name` of the input.
  * You can predict this and use it for styling.



More useful tags:

```erb
<%= text_area_tag(:message, "Hi, nice site", size: "24x6") %>
<%= password_field_tag(:password) %>
<%= hidden_field_tag(:parent_id, "5") %>
<%= search_field(:user, :name) %>
<%= telephone_field(:user, :phone) %>
<%= date_field(:user, :born_on) %>
<%= datetime_field(:user, :meeting_time) %>
<%= datetime_local_field(:user, :graduation_day) %>
<%= month_field(:user, :birthday_month) %>
<%= week_field(:user, :birthday_week) %>
<%= url_field(:user, :homepage) %>
<%= email_field(:user, :address) %>
<%= color_field(:user, :favorite_color) %>
<%= time_field(:task, :started_at) %>
<%= number_field(:product, :price, in: 1.0..20.0, step: 0.5) %>
<%= range_field(:product, :discount, in: 1..100) %>
```

```html
<textarea id="message" name="message" cols="24" rows="6">Hi, nice site</textarea>
<input id="password" name="password" type="password" />
<input id="parent_id" name="parent_id" type="hidden" value="5" />
<input id="user_name" name="user[name]" type="search" />
<input id="user_phone" name="user[phone]" type="tel" />
<input id="user_born_on" name="user[born_on]" type="date" />
<input id="user_meeting_time" name="user[meeting_time]" type="datetime" />
<input id="user_graduation_day" name="user[graduation_day]" type="datetime-local" />
<input id="user_birthday_month" name="user[birthday_month]" type="month" />
<input id="user_birthday_week" name="user[birthday_week]" type="week" />
<input id="user_homepage" name="user[homepage]" type="url" />
<input id="user_address" name="user[address]" type="email" />
<input id="user_favorite_color" name="user[favorite_color]" type="color" value="#000000" />
<input id="task_started_at" name="task[started_at]" type="time" />
<input id="product_price" max="20.0" min="1.0" name="product[price]" step="0.5" type="number" />
<input id="product_discount" max="100" min="1" name="product[discount]" type="range" />
```

## FormBuilder - Using form tags with model instances

Many of the form tags can be tied to model instances to either set their data OR to be tied to the appropriate form POST.

It may be useful to note the difference between the [FormTagHelper](http://api.rubyonrails.org/classes/ActionView/Helpers/FormTagHelper.html) and [FormBuilderHelper](http://api.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html).  

* FormBuilderHelper is intended to work with model objects and does a lot to help you pre-fill values.
 * `form_for` is the main entry point for working with FormBuilderHelper.
 * Many `_tag` methods have more specialized methods for use with `form_for`
* FormTagHelper is more general
 * most methods end in `_tag`

#### `form_for`
Used to build a form for an active record object.

```erb
<%= form_for @article, url: {action: "create"}, html: {class: "nifty_form"} do |f| %>
  <%= f.text_field :title %>
  <%= f.text_area :body, size: "60x12" %>
  <%= f.submit "Create" %>
<% end %>
```

```html
<form accept-charset="UTF-8" action="/articles/create" method="post" class="nifty_form">
  <input id="article_title" name="article[title]" type="text" />
  <textarea id="article_body" name="article[body]" cols="60" rows="12"></textarea>
  <input name="commit" type="submit" value="Create" />
</form>
```

Inside a form builder you'll typically operate on the form-builder object.  That is the `f` in between the `form_for .... do` and `end`.
The symbol passed to most of these methods references the model attribute (column-name) to use.  

The **name** attribute for form elements will be a combination of the model name and the symbol passed in the format `model[attribute]`.  That is:

```erb
<%= form_for @animal do |f| %>
  <%= f.text_field :species %>
```

Will give you an input tag like:
```html
<input id="article_title" name="animal[species]" type="text" />
```

And importantly, these become the keys in the params hash the controller receives when the form is submitted.  The controller will receive:

```rb
params = { 'animal' => { 'species' => 'value of the input box when submitted' } }
```

You then write controller code like:

```rb
params.require(:animal).permit(:species)
```

## More Form Methods

#### `f.text_field`

```erb
<%= form_for @article, url: {action: "create"}, html: {class: "nifty_form"} do |f| %>
  <%= f.text_field :title %>
```

#### `f.text_area`

```erb
<%= form_for @article, url: {action: "create"}, html: {class: "nifty_form"} do |f| %>
  <%= f.text_area :body, size: "60x12" %>
```

#### `f.select`

```erb
<%= form_for @person do |f| %>
  <%= f.select(:city_id) %>
<% end %>
```


#### `f.date_field` & `f.date_select` tags

```erb
<%= form_for @person do |f| %>
  <%= f.date_field :birthdate %>
<% end %>
```

```html
<form class="new_person" id="new_person" action="/people" accept-charset="UTF-8" method="post">
  <input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="PHkWssZGvQ==">
  <input type="date" name="person[birthdate]" id="person_birthdate">
</form>
```

OR

```erb
<%= form_for @person do |f| %>
  <%= f.date_select :birthdate %>
<% end %>
```

```html
<form class="new_person" id="new_person" action="/people" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="wfxWjMcmiPxojNAR//rCAVtJqAK7URyOya3Ub90bwAuKLdxixF7NtvuEYcDjhUU4VDDoG1qP+E8lwcRrFzbGhA==">
  <select id="person_birthdate_1i" name="person[birthdate(1i)]">
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016" selected="selected">2016</option>
    <option value="2017">2017</option>
    <!-- trimmed -->
  </select>
  <select id="person_birthdate_2i" name="person[birthdate(2i)]">
    <option value="1" selected="selected">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <!-- trimmed -->
  </select>
  <select id="person_birthdate_3i" name="person[birthdate(3i)]">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <!-- trimmed -->
    <option value="30">30</option>
    <option value="31">31</option>
  </select>
</form>
```

#### `hidden_field` or `f.hidden_field`
Creates an `input` tag with attribute `type='hidden'`.
```rb
hidden_field(:signup, :pass_confirm)
```

## PUT, PATCH, DELETE

Most browsers don't support PUT, PATCH & DELETE as form submission methods.  Rails however has a _work-around_ for this.  

Rails adds a hidden form field and processes this on a POST request, internally changing the request type.  

```erb
form_tag(search_path, method: "patch")
```

```html
<form accept-charset="UTF-8" action="/search" method="post">
  <input name="_method" type="hidden" value="patch" />
  <input name="utf8" type="hidden" value="&#x2713;" />
  <input name="authenticity_token" type="hidden" value="f755bb0ed134b76c432144748a6d4b7a7ddf2b71" />
  ...
</form>
```

## View Helpers Examples

Check out [this demo app](https://github.com/tgaff/view_helpers_demo_app/blob/master/app/views/people/_form.html.erb)


## Writing your own custom View Helpers

You can write your own [view helpers](http://www.rails-dev.com/custom-view-helpers-in-rails-4).

* use this technique to remove code from views
  * and DRY your views

# Using unobtrusive JavaScript

A large number of the helpers available in Rails have an option to use "Unobtrusive JavaScript".  This allows them to take actions using HTTP methods outside of GET and POST and to perform certain actions more quickly by submitting via javascript.  The JS code for doing this is built-in for you.

Most of the time this can be turned on by passing `remote: true` to the method call.

Examples:

```rb
<%= button_to "Create", { action: "create" }, remote: true, form: { "data-type" => "json" } %>
# => "<form method="post" action="/images/create" class="button_to" data-remote="true" data-type="json">
#      <input value="Create" type="submit" />
#      <input name="authenticity_token" type="hidden" value="10f2163b45388899ad4d5ae948988266befcb6c3d1b2451cf657a0c293d605a6"/>
#    </form>"
```

Much of this also depends on [Turbolinks](https://github.com/rails/turbolinks/).

* ACHTUNG: Having turbolinks enabled can at times interfere with custom javascript you may write for your app.  It's *strongly* recommended that you hold off on using this until you've become more familiar with Rails and read all the docs on Turbolinks.
