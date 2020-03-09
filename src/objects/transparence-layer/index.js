const transparenceLayer = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")
        $style.textContent = `
            .transparence-layer {
                background-color: rgba(0,0,0,.5);
                position: absolute;
                width: 100vw;
                height: 100%;
                top: 0;
                transition: opacity 200ms 400ms linear;
            }

            .transparence-layer.-disable {
                opacity: 0;
            }
        `

        $head.insertBefore($style, null)
    }

    module.render = () => {
        module._style();

        return `
            <div class="transparence-layer"></div>
        `
    };

    return {
        render: module.render
    }
})()