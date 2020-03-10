const btnCollabcode = (function(){
    const module = {};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
        $style.textContent = `
            .btn-collabcode {
                background-color: #f25a70;
                text-transform: uppercase;
                border: none;
                color: #fff;
                width: 100%;
                height: 48px;
                border-radius: 30px;
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
            }

            .input-collabcode + .btn-collabcode {
                margin-top: 45px;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    };

    const $errorPassword = errorCollabcode.render("Senha inválida, tente novamente")
    const $errorEmail = errorCollabcode.render("Email inválido, tente novamente")

    module.handleClick = (event, path) => {
        event.preventDefault();
        const $form = document.querySelector("form")
        const $inputEmail = document.querySelector(".input-collabcode[type='email']");
        const $inputPassword = document.querySelector(".input-collabcode#password");
        

        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (regEx.test($inputEmail.value) == true && $inputPassword.value.length == 8) {
            location.hash = `#/${path}`;
            location.reload(true);
        }
        console.log("Tou aqui")
        if (regEx.test($inputEmail.value) == false) {
            $form.insertBefore($errorEmail, $inputEmail.nextSibling)
            $errorEmail.style.display = 'block'
        } else {
            $errorEmail.style.display = 'None'
        }


        if ($inputPassword.value.length == 8) {
            $errorPassword.style.display = 'None'
        } else {
            $form.insertBefore($errorPassword, $inputPassword.nextSibling)
            $errorPassword.style.display = 'block'
        }
        
    }

    module.render = ({context = "", path = ""}) => {
        module._style();
        return `
            <input 
                class="btn-collabcode"
                type="submit"
                value="${context}"
                onclick="btnCollabcode.handleClick(event, '${path}')">`
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();