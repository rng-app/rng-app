/*!
* RNG App 0.0.1-mbuild-0.0.4 - <development>
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

    run_count = 0;

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


    render_component(elm, soft_render = false) {

        var rendered_f = this.components[elm.tagName.toLowerCase()];

        if (!soft_render) {

            var loop_rng_divs = elm.querySelectorAll('[rng]');

            if (loop_rng_divs.length !== 0) {
                var this_elm_innerHTML = this.components[elm.tagName.toLowerCase()]();
                var this_elm_creator = document.createElement('div');
                this_elm_creator.innerHTML = this_elm_innerHTML;
                loop_rng_divs.forEach(elmi => {
                    var loop_rng_blank = this_elm_creator.querySelector(`${elmi.tagName}[rng-blank]`);
                    if (loop_rng_blank !== undefined & loop_rng_blank !== null) {
                        loop_rng_blank.outerHTML = this.render_component(elmi, true).outerHTML;
                    }
                });
                rendered_f = function () {
                    return this_elm_creator.innerHTML;
                }
            }
        }


        try {
            elm.outerHTML = rendered_f()
                .replace(/\{\$([\w-]+)(:\w+)?\}/g, function (match, key, defaultValue) {
                    defaultValue = defaultValue ? defaultValue.slice(1) : '';
                    return elm.getAttribute(key.toLowerCase()) || defaultValue;
                });
        } catch (error) {
            console.log(error);
        }

        return elm;

    }

    run() {
        if (this.run_count >= 10) {
            this.run_count = 0;
            console.log('RNG run max loop limit [10].');
            return;
        }
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
            this.render_component(elm);
        });



        // rngs.forEach(elm => {
        //     try {
        //         elm.outerHTML = this.components[elm.tagName.toLowerCase()]()
        //             .replace(/\{\$([\w-]+)(:\w+)?\}/g, function (match, key, defaultValue) {
        //                 defaultValue = defaultValue ? defaultValue.slice(1) : '';
        //                 return elm.getAttribute(key.toLowerCase()) || defaultValue;
        //             });
        //     } catch (error) {
        //         console.log(error);
        //     }
        // });


        var _rngs = document.querySelectorAll('[rng]');
        if (_rngs.length !== 0) {
            this.run_count++;
            this.run();
        }

    }

}

var rng_app = new RNG();


