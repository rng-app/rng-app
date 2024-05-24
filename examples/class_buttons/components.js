

class Components {
    btn() {
        return `
            <button type="button" class="btn btn-{$color:primary}">{$action:Button}</button>
        `;

    }
}


// ☝️ For VS Code users, there is an extension called `string-highlight`
// (ID: `jenkey2011.string-highlight`), which is Syntax highlighter for
// the code in string like ```var btn = `<div></div>`;```, so it wil be
// easy to write a HTML-coded RNG component as a string of JavaScript.

