const layerStart = (function() {
    const module = {};

    module.handleClick = $component => {
        const $children = $component.querySelectorAll("*")
        
        $children.forEach(element => {
            element.classList.add('-disable')
        });

    }

    module.handleTransitionEnd = (event, $component) => {
        if (event.target.classList.contains('transparence-layer')) {
            $component.remove()
        }
    }

    module.render = (content) => {
        const $transparenceLayer = transparenceLayer.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
                ${$transparenceLayer}
                ${$gameButton}
            </div>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick,
        handleTransitionEnd: module.handleTransitionEnd
    }
})()