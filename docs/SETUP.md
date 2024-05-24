# Setup


## Include the library
Place the `<script>` tag for our JavaScript bundle before the closing `</body>`:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RNG App Demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Include here -->
    <script src="rng_app.js"></script>

  </body>
</html>
```



## Pre-start the app
You can directly use a variable `rng_app` which will be automatically defined, or create a new instance of `RNG` class and call `run()` to start the app.

1. Using a variable:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RNG App Demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <script src="rng_app.js"></script>

    <!-- Run app code -->
    <script type="text/javascript">
        rng_app.run(); // <<-------------
    </script>
  </body>
</html>
```

2. Using a new instance:
```html
...
    <!-- Run app code -->
    <script type="text/javascript">
        var rng = new RNG();  // <<-------------
        rng.run();  // <<-------------
    </script>
...
```


## Done. You can move to [COMPONENTS.md](COMPONENTS.md).