const linkCollab = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .link-collab {
                display: block;
                text-decoration: none;
                color: #3a4042;
                font-size: 0.87rem;
                opacity: .7;
                margin: 45px 0 60px 0;
                text-align: right;
            }
        `
        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = ({href, content}) => {
        module._style();

        return `
            <a class="link-collab" href="${href}">${content}</a>
        `
    }

    return {
        render: module.render
    }
})();