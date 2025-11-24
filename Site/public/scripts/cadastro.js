var chkNome = false;
var chkEmail = false;
var chkSenha = false;
var chkConfSenha = false;

var nome = '';
var email = '';
var senha = '';
var confSenha = '';

function validarEmail() {
    email = iptEmail.value;
    let erro = '';

    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        erro = `Insira um email válido que contenha @ e .`;
    } else if (email.length < 8) {
        erro = `Insira um email válido.`
    }

    if (erro != '') {
        erroEmail.innerHTML = `${erro}`;
        chkEmail = false;
    } else {
        erroEmail.innerHTML = ``;
        chkEmail = true;
    }
}

function validarSenha() {
    // Verificação se senha possui letra maiúscula e número
    senha = iptSenha.value.trim();
    var temMaiuscula = false;
    var temNumero = false;

    for (let i = 0; i < senha.length; i++) {
        let char = senha[i];

        if (char >= 'A' && char <= 'Z') {
            temMaiuscula = true;
            break;
        }
    }

    for (let i = 0; i < senha.length; i++) {
        let char = senha[i];

        if (char >= '0' && char <= '9') {
            temNumero = true;
            break;
        }
    }

    //validações         
    let erro = '';

    //verifica se tem no minimo 8 caracteres
    if (senha.length < 8) {
        erro = 'A senha deve ter pelo menos 8 caracteres.'
        // verificação para ver se tem numero
    } else if (!temNumero) {
        erro = 'A senha deve conter pelo menos um número.';
        // Verificação letra maiscula
    } else if (!temMaiuscula) {
        erro = 'A senha deve conter pelo menos uma letra maiúscula.';
        //Verificação de caractere especial
    } else if (senha.indexOf('!') == -1 && senha.indexOf('@') == -1 && senha.indexOf('#') == -1 && senha.indexOf('$') == -1 && senha.indexOf('&') == -1) {
        erro = 'A senha deve conter pelo menos um caractere especial (!, @, #, $, &).';
    }

    if (erro != '') {
        erroSenha.innerHTML = `${erro}`;
        chkSenha = false;
    } else {
        erroSenha.innerHTML = ``;
        chkSenha = true;
    }
}

function validarNome() {
    nome = iptNome.value.trim();
    let erro = '';

    if (nome.length < 6) {
        erro = `Insira seu nome completo`
    }

    if (erro != '') {
        erroNome.innerHTML = `${erro}`;
        chkNome = false;
    } else {
        erroNome.innerHTML = ``;
        chkNome = true;
    }
}

function cadastrar() {
    validarNome();
    validarEmail();
    validarSenha();

    confSenha = iptConfirmacaoSenha.value.trim();
    const chkErro = chkNome && chkEmail && chkSenha;


    if (!chkErro) {
        alert('Verifique se todos os campos estão preenchidos corretamente!');
        return false;
    }
    if (email == '') {
    erroEmail.innerHTML = `Preencha o campo Email`;
    return false;
    }
    if (senha == '') {
        erroSenha.innerHTML = `Preencha o campo Senha`;
        return false;
    }
    if (nome == '') {
        erroNome.innerHTML = `Preencha o campo Nome`;
        return false;

    }
    if (confSenha == '') {
        erroConfSenha.innerHTML = `Preencha o campo Confirmação de Senha`;
        return false;
    } else if (senha != confSenha) {
        erroConfSenha.innerHTML = 'As senhas digitadas são diferentes. Por favor, verifique e tente novamente.'
        return false;
    }
    

    var nomeVar = iptNome.value;
    var emailVar = iptEmail.value;
    var senhaVar = iptSenha.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert('Cadastrado com sucesso!');

                window.location.href = "login.html";
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}
