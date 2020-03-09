const formSignup = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-collabcode {
                padding: 0 35px 40px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module._children = () => {

        const $usernameLabel = labelCollabcode.render("Username");
        const $usernameInput = inputCollabcode.render({
            placeholder:"Name-example"
        });
    
        const $emailLabel = labelCollabcode.render("E-mail");
        const $emailInput = inputCollabcode.render({ 
            placeholder :"example@email.com",
            type:"email"
        });
    
        const $passwordLabel = labelCollabcode.render("Password");
        const $passwordInput = inputCollabcode.render({
            placeholder: "Digite sua senha",
            type: "password"
        });

        const $confirmLabelPassword = labelCollabcode.render("Confirm password")
        const $confirmInput = inputCollabcode.render({
            placeholder: "Confirme sua senha",
            type: "password"
        })
    
        const $btn = btnCollabcode.render({context: "Submit", path: "login"});

        return `
            ${$usernameLabel}
            ${$usernameInput}
            
            ${$emailLabel}
            ${$emailInput}

            ${$passwordLabel}
            ${$passwordInput}

            ${$confirmLabelPassword}
            ${$confirmInput}

            ${$btn}
        `
    }
    
    
    module.render = () => {
        module._style();
        return `
            <form class="form-collabcode" action="" method="POST">
                ${module._children()}
            </form>
        `
    };

    return {
        render: module.render
    }
})()