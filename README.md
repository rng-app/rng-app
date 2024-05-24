<h1 align="center">
 RNG App - React-like Components In Your HTML
</h1>

<p align="center">
    <i>(This is a new project.)</i>
    <br>
</p>

> Welcome to **RNG App**, a lightweight JavaScript library
> that brings the power of React-like components to your simple HTML pages.
> With RNG App, you can define and use custom components with ease,
> directly in your HTML code.

<p align="center">
    <a href="https://github.com/princerb/rng-app/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Released under the MIT License" />
    </a>
    <a href="https://github.com/princerb/rng-app/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
    </a>
    <a href="https://discord.gg/zN9KFU9aAg">
    <img src="https://img.shields.io/discord/1243289437404926123?color=5865F2" alt="Chat with us on Discord">
    </a>
</p>


### Features:
- custom and reusable components within HTML code
- lightweight and efficient.
- fast and simple
- and so much more...

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

    <GreetingComponent rng name="World"></GreetingComponent>

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

### You can find more in the [Components documentation](/docs/COMPONENTS.md).

## Contributing
RNG App is an open-source project and contributions are welcome! Whether you're fixing bugs, adding new features, or improving documentation, your help is appreciated.

- Join our Discord server: https://discord.gg/zN9KFU9aAg

### How to Contribute
- Fork the repository.
- Create a new branch (git checkout -b f-make-better).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature to make better').
- Push to the branch (git push origin f-make-better).
- Open a Pull Request.
Please ensure your code adheres to the existing coding conventions and includes appropriate tests.

> ☝️ For VS Code users, there is an extension called `string-highlight`
> (ID: `jenkey2011.string-highlight`), which is Syntax highlighter for
> the code in string like ```var btn = `<div></div>`;```, so it wil be
> easy to write a HTML-coded RNG component as a string of JavaScript.



## License
RNG App is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements
Thanks to all the contributors who have helped make this project better.
