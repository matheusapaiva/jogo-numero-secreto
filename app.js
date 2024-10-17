// let titulo = document.querySelector('h1');
// titulo.innerHTML ='Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML ='Escolha um número entre 1 e 10';

// Criando um Array
let listaDeNumerosSorteados = [];
let numeroLimite = 100;

let numeroSecreto = numeroAleatorio();
//console.log(numeroAleatorio);
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

}

exibirMensagemInicial();

// escopo da função

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Parabéns, você acertou!');
        // exibirTextoNaTela('p', 'Você acertou o número secreto com 5 tentativas')
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } 
    else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p','O número secreto é menor');
    }
         else {
             exibirTextoNaTela('p','O número secreto é maior');
         }
    //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
     } 
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    // A função includes() vai verificar se o numeroEscolhido já está incluído na listaDeNumerosSorteados
    let qntDeElementosNaLista = listaDeNumerosSorteados.length;
    if (qntDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }
    else {
        // Para adicionarmos um elemento na nossa lista, utilizamos o seguinte comando 'push':
        listaDeNumerosSorteados.push(numeroEscolhido);
        // Apenas para verificarmos os números que serão adicionados na lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

// implementando campo vazio

function limparCampo() {
   let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

