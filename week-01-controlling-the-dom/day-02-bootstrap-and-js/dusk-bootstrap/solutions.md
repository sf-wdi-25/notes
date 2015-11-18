## Solutions - Bootstrap & Grid

#### Modular, class-based CSS styles
Solution: http://codepen.io/nathanallen/pen/LpaEvB?editors=110

#### Fiddling with the Grid
Play with the following codepen: [bootstrap-grid-demo](http://codepen.io/nathanallen/pen/XmOBdL?editors=110)

1. What happens when you grab the corner of your browser and resize/reflow the browser window?
    - At a certain point, the colums move from being side-by-side to being stacked.
2. What is a breakpoint? When does the "break" happen? How many pixels is that?
    - Between browser width of 990px and 991px.
3. Which screen-size are we targeting?
    - "Medium" devises, large tables & laptops.
4. What would happen if we put a row of columns _inside_ of a column!? Can the grid even handle that?
    - [Solution](http://codepen.io/nathanallen/pen/LpqwbO?editors=110)
5. How would you stop the columns in the `.col-md-6` row from "stacking" on a mobile phone?
    - Use `.col-sm-6` or `.col-xs-6`
6. Can you recreate the standard two-column layout?
    ```html
     <div class="container">
        <div class="row">
          <div class="col-md-7">
             <strong>.col-md-7</strong>
          </div>
          <div class="col-md-3 col-md-offset-1">
             <strong>.col-md-3.col-md-offset-1</strong>
          </div>
        </div>
      </div>
    </div>
    ```

#### Bootstrap Mockups Lab
See the [solutions branch](https://github.com/sf-wdi-25/bootstrap_mockups/tree/solutions)
