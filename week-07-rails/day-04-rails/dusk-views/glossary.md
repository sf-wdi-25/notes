# Layouts and Partials

#### `yield`

Yield is used within a **layout** to render the **view**.

Yield the view within a div.
```erb
<div class="container site-content">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <%= yield %>
    </div>
  </div>
</div>
```

#### `render`

Render the `_product.html.erb` partial

```erb
<%= render "product" %>
```

Render the partial in `shared/_footer.html.erb`
```erb
<%= render "shared/footer" %>
```

Render a partial in `_product.html.erb` and pass it a variable.
```erb
# index.html.erb
<% @products.each do |product| %>
  <%= render partial: "product", locals: {product: product} %>
<% end %>

# _product.html.erb
<div>
  Name: <%= product.name %>
</div>
```


# View helper methods

#### Linking to assets

* `image_tag`


# Form Helper methods
The follwing methods are used with [`form_for`](http://apidock.com/rails/ActionView/Helpers/FormHelper/form_for) to create a `<form>` element

A form can be constructed for a specific model object by passing it directly.
```erb
<%= form_for @business do |f| %>
  name: <%= f.text_field :name %><br />
  website_url : <%= f.text_field :website_url %><br />
  <%= f.submit %>
<% end %>
```

A form can also be constructed using a symbol which matches a model name.

```erb
<%= form_for :person do |f| %>
  First name: <%= f.text_field :first_name %><br />
  Last name : <%= f.text_field :last_name %><br />
  Biography : <%= f.text_area :biography %><br />
  Admin?    : <%= f.check_box :admin %><br />
  <%= f.submit %>
<% end %>
```

Specifying path (URL) and HTTP verb to use:

```erb
<%= form_for @post, as: :post, url: post_path(@post), method: :patch do |f| %>
  ...
<% end %>
```

Specifying html attributes like `id` and `class`:

```erb
<%= form_for :person, html: { class: "col-md-6", id: "person_form" } do |f| %>
 ...
<% end %>
```

Accessing associated resources.  In this case adding a new comment to a document.
```erb
<%= form_for([@document, @comment]) do |f| %>
 ...
<% end %>
```


#### [`f.submit`](http://apidock.com/rails/ActionView/Helpers/FormBuilder/submit)

```erb
<%= form_for :person do |f| %>
  <%= f.submit %>
<% end %>
```

Adding a class and calling a javascript function on-click handler:
```erb
<%= f.submit ‘Create User’, class: ‘buttons’, :onclick => “validate_user_form_and_submit()” %>
```


#### [`f.text_field`](http://apidock.com/rails/v4.2.1/ActionView/Helpers/FormHelper/text_field)
Output: `<input type='text'>`

Using the `first_name` attribute on a person object.
```erb
<%= form_for :person do |f| %>
  First name: <%= f.text_field :first_name %><br />
<% end %>
```

Specifying a size:
```erb
<%= form_for :person do |f| %>
  <%= text_field(:first_name, size: 20) %>
<% end %>
```

#### [`f.text_area`](http://apidock.com/rails/v4.2.1/ActionView/Helpers/FormHelper/text_area)
Output: `<textarea>`

Generate 2 textareas with 20 columns and 3 rows.
```erb
<%= form_for :product do |f| %>
  <%= f.text_area(:description, size: '20x3') %>
  <%= f.text_area(:other, cols: 20, rows: 3) %>
<% end %>
```
Outputs:
```html
<textarea cols="20" rows="3" id="post_body" name="post[body]">
```

#### [`f.check_box`](http://apidock.com/rails/v4.2.1/ActionView/Helpers/FormHelper/check_box)
Output: `<input type='checkbox'`

> Note: there are some major caveats when using checkbox, please see the docs.

```erb
  <%= f.check_box("validated") %>
```
```html
<input name="post[validated]" type="hidden" value="0" />
<input checked="checked" type="checkbox" id="post_validated" name="post[validated]" value="1" />
```

Note that rails adds a secondary `hidden` field.  See docs for details.

There's also another checkbox method, `collection_check_boxes`

#### [`f.collection_check_boxes`](http://api.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html#method-i-collection_check_boxes)

```erb
<%= form_for @post do |f| %>
  <%= f.collection_check_boxes :author_ids, Author.all, :id, :name_with_initial %>
  <%= f.submit %>
<% end %>
```
> Note: For a better explanation see the [method](http://api.rubyonrails.org/classes/ActionView/Helpers/FormOptionsHelper.html#method-i-collection_check_boxes) wrapped by this one.

#### [`f.select`](http://apidock.com/rails/v4.2.1/ActionView/Helpers/FormBuilder/select)
```erb
<%= form_for @post do |f| %>
  <%= f.select :person_id, @people.collect { |p| [ p.name, p.id ] }, include_blank: true %>
  <%= f.submit %>
<% end %>
```

#### [`f.date_select`](http://api.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html#method-i-date_select)

```erb
<%= form_for @person do |f| %>
  <%= f.date_select :birth_date %>
  <%= f.submit %>
<% end %>
```

#### [`f.label`](http://apidock.com/rails/v4.2.1/ActionView/Helpers/FormBuilder/label)

```erb
<%= form_for :person do |f| %>
  <%= f.label :first_name, "Type your first name:" %>
  <%= text_field(:first_name, size: 20) %>  
<% end %>
```
