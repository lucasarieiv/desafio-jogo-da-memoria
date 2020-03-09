const logoCollabcode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .logo-collabcode {
                background-color: #fff;
                display: inline-block;
                border: solid 40px #fff;
                border-radius: 50%;
                margin-top: 50px;
            }

            .logo-collabcode > .logo {
                width: 175px;
                height: 175px;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = () => {
        module._style();

        return `
            <figure class="logo-collabcode">
                <img class="logo" src="/img/icon-collabcode.png">
            </figure>
        `;
    }

    return {
        render: module.render
    }
})()