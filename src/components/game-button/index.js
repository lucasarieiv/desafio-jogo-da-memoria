const gameButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style");
        
        $style.textContent = `
            .game-button {
                outline: none;
                cursor: pointer;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%);
                background-color: #2ed573;
                color: #fff;
                font-weight: bold;
                border: 3px solid #fffcee;
                text-transform: uppercase;
                font-size: 1.05em;
                box-shadow: 0 3px 10px rgba(0,0,0, .3);
                transition: opacity 300ms ease-in, transform 200ms ease-in;
            }

            .game-button.-disable {
                opacity: 0;
                transform: translate(-50%, -35%) scale(2.5);
            }
        `

        $head.insertBefore($style, null)
    }

    module.handleClick = $component => {
        $component.remove()
        document.querySelector('.transparence-layer').remove()
    }

    module.render = content => {
        module._style();

        return `
            <button class="game-button">${content}</button>
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();