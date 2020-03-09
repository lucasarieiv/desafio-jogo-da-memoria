const formLogin = (function() {
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

        const $emailLabel = labelCollabcode.render("E-mail");
        const $emailInput = inputCollabcode.render({ 
            placeholder :"example@email.com",
            type:"email"
        });

    
        const $passwordLabel = labelCollabcode.render("Password");
        const $passwordInput = inputCollabcode.render({
            id: "password",
            placeholder: "Digite sua senha",
            type: "password"
        });

        const $eyeCollabcode = eyeCollabcode.render({attrFor: "password"});

        const $linkCollab = linkCollab.render({
            href: "#",
            content: "Forget password ?"

        });
    
        const $btn = btnCollabcode.render({context: "Login", path: "game"});
        return `
            ${$emailLabel}
            ${$emailInput}

            ${$passwordLabel}
            ${$passwordInput}
            
            ${$eyeCollabcode}

            ${$linkCollab}
            
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
})();