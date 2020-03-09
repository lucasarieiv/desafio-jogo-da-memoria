const btnBack = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .btn-ibb {
                cursor: pointer;
                display: block;
                width: 90px;
                height: 90px;
                background-image: url('https://i.pinimg.com/564x/4e/52/cd/4e52cdfd0cf957a485caa9e35af7f542.jpg');
                backgroud-repeat: no-repeat;
                background-size: cover;
                border-radius: 50%;
                border: 3px solid #fff;
                margin: 20px auto;
                text-indent: -9999px;
                box-shadow: 0 3px 10px #0000004d;;
            }
        `

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.handleClick = (event, path = "") => {
        event.preventDefault();
        location.hash = `#/${path}`;
        location.reload(true);
    }

    module.render = ({path = ""}) => {
        module._style();
        return `
            <button class="btn-ibb" onclick="btnBack.handleClick(event, '${path}')">I'll be back</button>
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();