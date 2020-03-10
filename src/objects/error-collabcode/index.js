const errorCollabcode = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .error-collabcode {
                color: #f25a70;
                text-align: left;
                margin: 10px 0;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)

    }

    module.render = context => {
        module._style();
        const $errorCollabcode = document.createElement("p")
        $errorCollabcode.classList.add("error-collabcode");
        $errorCollabcode.textContent = `${context}`
        return $errorCollabcode
    }
    
    return {
        render: module.render
    }
})();