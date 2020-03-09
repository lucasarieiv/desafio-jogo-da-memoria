const status404 = (function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log In", true, "login");
    const $signUpButton = flatButton.render("Sign Up", false, "signup");

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Error 404 - Página não encontrada");

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
});