## Events

#### Octocat & Mouse

``` javascript
$(".mega-octicon").on("mouseover", function handleHover(){
    console.log("i gotchew mousie!");
})
```

#### Infinite Scroll
``` javascript
$(window).on("scroll", function handleScroll(){
    $("body").append("<p>to infinity... and beyond!</p>");
})
```

#### Hijack Click

``` javascript
var clickCount = 0;
$("a#san-francisco_cta").on("click", function handleClick(event){
    event.preventDefault();
    console.log("Clicked!");

    clickCount = clickCount + 1;
    $(this).text( clickCount );
})
```

#### Events Lab

Please see the `solutions` branch of the events_lab repo: https://github.com/sf-wdi-25/events_lab/tree/solutions
