# RNG App - React-like Components In Your Simple HTML

_(This is a new project.)_

Welcome to **RNG App**, a lightweight JavaScript library that brings the power of React-like components to your simple HTML pages. With RNG App, you can define and use custom components with ease, directly in your HTML files.

## Getting Started

### Installation

To get started with RNG App, simply include the `src/rng_app.js` script in your HTML file:

```html
<script src="path/to/rng_app.js"></script>
```

### Usage
1. Include the RNG App script at the end of the body in your HTML code:
    ```html
    <body>

        ...

        <script src="rng_app.js"></script>
    </body>
    ```

2. Run (refreshes the components and renders directly) the app in advance:
    ```html
    <body>

        ...

        <script src="rng_app.js"></script>
        <script type="text/javascript">
            // Run the app after including the script
            rng_app.run();

            // or run by creating a new instance
            //    var rng = new RNG();
            //    rng.run();
            
        </script>
    </body>
    ```

3. Define your custom components using the `<RNGComponent>` tag and use them within your HTML body:


    ```html
    <body>
        
        ...

        <RNGComponent name="MyFirstComponent">
            <div class="container">
                {$text}
            </div>
        </RNGComponent>

        <script src="rng_app.js"></script>
        <script type="text/javascript">
            var rng = new RNG();
            rng.run();
        </script>
    </body>
    ```

4. Utilise components with the specified parameters and options:

    ```html
    <body>

        ...

        <div class="container">
            <MyFirstComponent rng text="Hello"></MyFirstComponent>
        </div>

        ...

        <RNGComponent name="MyFirstComponent">
            <div class="container">
                {$text}
            </div>
        </RNGComponent>

        <script src="rng_app.js"></script>
        <script type="text/javascript">
            var rng = new RNG();
            rng.run();
        </script>
    </body>
    ```

5. That is it! It is all set now!



### Example
Here's a quick example of how you can define and use a simple component:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>RNG App Example</title>
</head>
<body>

    <GreetingComponent name="World"></GreetingComponent>

    <RNGComponent name="GreetingComponent">
        <div>
            Hello, {$name}!
        </div>
    </RNGComponent>


    <script src="path/to/rng_app.js"></script>
    <script>
        var rng = new RNG();
        rng.run();
    </script>
</body>
</html>
```

## Contributing
RNG App is an open-source project and contributions are welcome! Whether you're fixing bugs, adding new features, or improving documentation, your help is appreciated.

### How to Contribute
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
Please ensure your code adheres to the existing coding conventions and includes appropriate tests.

## License
RNG App is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements
Thanks to all the contributors who have helped make this project better.
