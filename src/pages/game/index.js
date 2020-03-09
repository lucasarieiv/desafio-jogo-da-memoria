const game = (function () {
    const $root = document.querySelector('#root')

    const $cardsWrapper = createCardsWrapper()
    const createMemoryCard = memoryCard.create()
    const $layerStart = layerStart.render("Start")

    const $pointBar = pointBar.create();
    const $btnBack = btnBack.render({path: "login"});

    const memoryCardC = createMemoryCard(
        {
            nameClass: "-front",
            src: "img/icon-c.png",
            alt: "Icone do Livro de C"
        }
    );
    
    const memoryCardBug = createMemoryCard(
        {
            src: "img/icon-bug.png",
            alt: "Icone de um Inseto"
        }
    );
    
    const memoryCardJS = createMemoryCard(
        {
            src: "img/icon-js.png",
            alt: "Icone do Livro de Javascript"
        } 
    );
    
    const memoryCardJava = createMemoryCard(
        {
            src: "img/icon-php.png",
            alt: "Icone Livro de Php"
        }
    )
    
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardBug)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardC)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardJava)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardBug)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardJS)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardC)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardJava)
    $cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardJS)

    $root.insertAdjacentHTML('afterbegin', $btnBack)
    $root.insertAdjacentHTML('afterbegin', $pointBar)
    $root.insertAdjacentElement('beforeend', $cardsWrapper)
    $root.insertAdjacentHTML('beforeend', $layerStart)
});

