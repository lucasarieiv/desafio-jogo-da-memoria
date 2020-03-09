const signup = (function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("Log In", false, "login");
    const $signUpButton = flatButton.render("Sign Up", true, "signup");

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');
    
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
    const $formSignUp = formSignup.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formSignUp);
});