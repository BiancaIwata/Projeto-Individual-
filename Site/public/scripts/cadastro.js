var chkNome = false;
var chkEmail = false;
var chkSenha = false;
var chkConfSenha = false;

function validarEmail() {
    email = iptEmail.value.trim();
    let erro = '';

    if (email == '') {
        erro = `Preencha o campo Email`;
    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        erro = `Insira um email válido que contenha @ e .`;
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
    var senha = iptSenha.value.trim();
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

    if (senha == '') {
        erro = `Preencha o campo Senha`;
    }
    // verificação para ver se tem numero
    else if (!temNumero) {
        erro = 'A senha deve conter pelo menos um número!';
    } 
    // Verificação letra maiscula
    else if (!temMaiuscula) {
        erro = 'A senha deve conter pelo menos uma letra maiúscula!';
    }
    //Verificação de caractere especial
    else if (senha.indexOf('!') == -1 && senha.indexOf('@') == -1 && senha.indexOf('#') == -1 && senha.indexOf('$') == -1 && senha.indexOf('%') == -1 && senha.indexOf('&') == -1) {
        erro = 'A senha deve conter pelo menos um caractere especial (!, @, #, $, %, &)';
    }
    //verifica se tem no minimo 8 caracteres
    else if (senha.length < 8) {
        erro = 'A senha deve ter pelo menos 8 caracteres!'
    }

    if (erro != "") {
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

    if (nome == '') {
        erro = `Preencha o campo Nome`;
    //verifica se tem no minimo 6 caracteres
    } else if (nome.length < 6) {
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
function validarConfSenha() {
    senha = iptSenha.value.trim();
    senhaConf = iptConfirmacaoSenha.value.trim();
    let erro = '';

    if (senhaConf == '') {
        erro = `Preencha o campo Confirmação de Senha`;
    }else if (senha != senhaConf) {
        erro = 'As senhas digitadas são diferentes. Por favor, verifique e tente novamente.'
    }

    if (erro != '') {
        erroConfSenha.innerHTML = `${erro}`;
        chkConfSenha = false;
    } else {
        erroConfSenha.innerHTML = ``;
        chkConfSenha = true;
    }
}

function cadastrar(){
    validarNome();
    validarEmail();
    validarSenha();
    validarConfSenha();


    const temErro = chkNome && chkEmail && chkSenha && chkConfSenha;

    if (!temErro) {
        alert('Verifique se todos os campos estão preenchidos!');
        return false;
    } else {
        alert('Cadastrado com sucesso!');
        window.location.href = "login.html";
    }

}