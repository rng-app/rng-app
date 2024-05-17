/*!
* RNG App 0.0.1-mbuild-001 - <development>
* License - MIT License
* Copyright 2023
*/



var styles = `
rngcomponent {
    display: none!important;
}
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


class RNG {
    components = {
        'rngdiv': function () { return "<div>RNG Div here</div>" }
    }

    add(component_name, f) {
        this.components[component_name.toLowerCase()] = f;
    }

    add_class(cls) {
        for (let i of Object.getOwnPropertyNames(cls.prototype)) {
            this.add(
                i.toLowerCase(), cls.prototype[i]
            );
        }
    }

    run() {
        var rng_components = document.querySelectorAll('RNGCOMPONENT');
        rng_components.forEach(elm => {
            if (elm.hasAttribute('name')) {
                this.add(
                    elm.getAttribute('name'),
                    function () {
                        return elm.innerHTML;
                    }
                )
            }
        });

        var rngs = document.querySelectorAll('[rng]');
        rngs.forEach(elm => {
            try {
                elm.outerHTML = this.components[elm.tagName.toLowerCase()]()
                    .replace(/\{\$([\w-]+)\}/g, function (match, key) {
                        return elm.getAttribute(key.toLowerCase()) || '';
                    });
            } catch (error) {
                console.log(error);
            }
        });

    }

}

var rng_app = new RNG();


