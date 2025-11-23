
function entrar() {
        var emailVar = iptEmail.value;
        var senhaVar = iptSenha.value;

        if (emailVar == '' || senhaVar == '') {
            erroEmail.innerHTML = `Preencha o campo Email`;
            erroSenha.innerHTML = `Preencha o campo Senha`
        }
        
        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id_usuario;

                    setTimeout(function () {
                        window.location = "comentarios.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {
                console.log("Houve um erro ao tentar realizar o login!");;

                erro.innerHTML = `Email ou senha inválidos.`
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

