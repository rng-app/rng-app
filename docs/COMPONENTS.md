# Components

### Contents:
- Ways to create components:
    - [HTML-coded](#lets-try-html-coded-component-this-is-a-very-easy-and-basic-way-to-create-a-component-here-is-an-example)
    - [Functions](#defining-using-a-js-function)
    - [Advanced: Classes](#advanced-way-js-class)
- [Using variables](#adding-variables)


## Create a new component
**There are 3 ways to define a component:**
1. Directly within HTML code
3. Defining a function in JS
2. Defining a set of functions inside JS class


###  Let's try **HTML-coded component.** This is a very easy and basic way to create a component. You should wrap your content with `<RNGComponent>` tag, and its attribute `name` will the name of your component. Here is an example:
```html
...
<body>
    ...

    <RNGComponent name="MyFirstComponent">
        Hello, World!
    </RNGComponent>

    ...
</body>
...
```
> <i> This is a component with just a text content. When you use it, it will just render the text `"Hello, World!"`.</i>


#### Now, you can use this component wherever you want in your HTML code.

Example:
```html
<!-- What you write: -->
<title> My Page - <MyFirstComponent rng></MyFirstComponent> </title>
```
> <i> In this example, document title after running the app will be `"My Page - Hello, World!"`, like this transformation: </i>
```html
<!-- What will render: -->
<title> My Page - Hello, World! </title>
```


## Adding variables
You should just follow this syntax:
```
{$your-variable-name}
```
You can also set a default value:
```
{$your-variable-name: Default value goes here}
```
If you don't specify a default value, then the empty string will be rendered.

### Example:
```html
<!-- Create a component -->
<RNGComponent name="MyFirstComponent">
    Hello, {$to-whom:World}!
</RNGComponent>

<!-- And use this anywhere: -->
<div class="container">
    <!-- With parameter -->
    <MyFirstComponent rng to-whom="Peter"></MyFirstComponent>

    <!-- Without parameter (default value) -->
    <MyFirstComponent></MyFirstComponent>
</div>
```

```html
<RNGComponent name="btn">
    <button type="button" class="btn btn-{$button-color:primary}">{$action:Save}</button>
</RNGComponent>

<div class="container">
    <btn rng></btn>
    <btn rng button-color="success"></btn>
    <btn rng button-color="warning" action="Cancel"></btn>
    <btn rng button-color="danger" action="Delete"></btn>
</div>
```



## Defining using a JS function
This is the 2nd way we mentioned above to create a component. Your function must return a string as a content:
```html
<btn rng></btn>

<script>
    function mybutton_renderer() {
        return `
            <button type="button" class="btn btn-{$color:primary}">{$action:Button}</button>
            `;

    }
    rng_app.add('btn', mybutton_renderer);
    rng_app.run();
</script>
```



## Advanced way: JS class
3rd way to create components is to use a JS class. Your class should have methods that each will return a string as a content:
```html
<btn rng></btn>

<script>
    class Components {
        btn() {
            return `
                <button type="button" class="btn btn-{$color:primary}">{$action:Button}</button>
            `;
        }
    }
    rng_app.add_class(Components);
    rng_app.run();
</script>
```
> ☝️ For VS Code users, there is an extension called `string-highlight`
> (ID: `jenkey2011.string-highlight`), which is Syntax highlighter for
> the code in string like ```var btn = `<div></div>`;```, so it wil be
> easy to write a HTML-coded RNG component as a string of JavaScript.

