// vamos agora trabalhar com um projeto semelhante ao anterior 
//porem vamos deixar nosso jogo um pouco mais parecido com o mundo real
//no lugar dos alerts vamos sar menssagens ao usuario pelo HTML, que é a maneira comum que vemos por ai

//quando quieremos manipular os elemetos do html temos que saber bem o nome da tag que vamos trabalhar
//para isso podemos usar o nome da tag, class ou id que é o mais indicado

//para manibular esse elemento html vamos criar uma variavel que irá receber esse elemento
//para indicar um elemento do html podemos usar algumas funçôes nativas:
//document.querySelector('');
//document.getElementById('#')
//document.getElementsByClassName('.')

/*
let titulo = document.querySelector('h1');
*/

// assim estamos selecionando essa parte, essa tag do nosso codigo e vamos trabalhar com ela usando a variavel titulo
//vamos agopra usar uma função para adicionar conteudo no h1, a função .innerHTML

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';
*/

//assim já fizemos uma alterção no html pelo javascript
//agora vamos alterar mais um elemento
//abaixo do h1 temo um p que vamos usar para passar as menssagens do alert
//esse p tem uma class para identificalo

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
*/

//agora vamos começar a trabalhar com funções
//por enquanto o botao 'chutar' não faz ação nenhuma e vamos usar uma fução para dar vida a ele
//pruimeiro temos que fazer uma referencia a ele no javascript
//la no html no nosso botao temos um atrributo chamado onclick="" que significa "ao clicar"
//o onclick serve para adicionarmos alguma coisa quando o botão é clicado
//para isso vamos criar uma função dentro do onclick chamada 'verificarChute()'
//toda vez que criamos e chamamos uma função temos que colocar parenteses
//dentro desses paraneteses podemos criar parâmetros para nossa função e adicionar argumentos quando chamamos ela

//para criar a função agora ultilizamos a palavra function o mesmo nome junto aos parenteses 
//e agora vamos colocar chaves para criar um cloco onde vamos adicionar os comandos da função
//para testar vamos colocar uma menssagem no console "botão foi clicado"

/*

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute(){
    console.log("botão foi clicado");
}

*/

// as funções como vimos podem ter parametros que são como variaveis que funcionam dentro da nossa função
// o valor desse paramento vai variar quando chamarmos ela e colocarmos o valor dentro dos parenteses
// no nosso exercicio temos temos duas variaveies e dois comandos parecidos
//titulo e paragrafo, e os comandos para alterar seu conteudo
//essas linhas estão pegando coisas diferentes porem sao bem semelhantes
//vamos criar uma variavel chamada 'campo', ele iram receber document.querySelector(tag)
//na linha de baixo vamos colocar a alteração do conteudo da variavel 'tag' e vamos falar que irá receber texto
//as variaveis 'tag' e 'texto' faram parte de uma função e sera seus paramentros
//quando quisermos alterar o texto do h1 vamos chamar a função e passar os paramentros para campo e texto
//e o mesmo vale para o p
//dessa maneira toda vez que quisermos alterar o conteudo de algo vamos apenas chamar a função, isso deixa o código menor
//é muito comum na porgramação usarmos funções para códigos que são muito parecidos
//para terminar  de criar a função vamos escrever function e dar o nome de exibirTextoNaTela(){}
// e nossas recem criadas variaveis vao dentro dos parenteses e os comandos de ntro do bloco da função


/*
function exibirTextoNaTela( tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número secreto');
exibirTextoNaTela('p','Digite um número de 1 a 10');


function verificarChute(){
    console.log("botão foi clicado");
}
*/

//vamos agora fazer uma função para gerar o número aleatório, vamos criar a função com nome gearNumeroAleatorio
// dentro dela vamos colocar o que já sabemos dos Math.random
//agora temos que gardar esse número dentro de uma variavel então precisamos que alem de criar o numero a função retorne ele
//assim vamos dizer que queremos que a função retorne o numero aleatoerio usando 'return' antes do nosso numero
// então vamos criar a variavel 'numeroSecreto' essa variavel ira receber nossa função


// let numeroSecreto  =  gearNumeroAleatorio();

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     console.log("botão foi clicado");
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

//vamos agora usar nosso botão do chute para fazer a verificação do numero q o usuario digitpu no input
//para isso precisamos pegar o conteudo dentro do input
//entao para isso vamos criar uma nova variavel para receber esse valor (numero) do chute
//agora vamos usar o query selector para indicar nosso input
//e para selecionar o conteúdo dentro desse input vamos usar a função '.value' e assim já conseguimos acessar esse núumero
//agora vamos fazer uma comparação dentro de um console para ver se o chute é igual ao numero secreto

// let numeroSecreto  =  gearNumeroAleatorio();

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     console.log(chute ==  numeroSecreto);
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

// se dermos uma olhada no console o resultado foi 'true'(verdadeiro) ou 'false'(falso)
//o resultado dessa opreção é um novo tipo de dado, o boolean ou boleano
//basicamente é um tipo que indica se algo é verdade ou não
//no nosso caso se os numeros forem iguais true se nao false

//agora no lugar do console podemos exibir na tela para o usuario esse reultado do chute
//para começar vamos criar uma condição para testar se o chute foi certeiro com o if else
//se acertar vamos mudar o texto do h1 e do p 
//se errar vamos testar se o chute foi maior ou menor que o numero secreto e infoemar ao usuario

// let numeroSecreto  =  gearNumeroAleatorio();

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     console.log(chute ==  numeroSecreto);
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         exibirTextoNaTela('p','Você descobriu o número secreto');
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//         }
//     }
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

//esta ainda faltando no nosso jogo o numero de tentativas que o usuario fez
//essa menssagem vai aparecer no p quando a pessoa acertar
//para colocar o numero de tentativas ali vamos criar uma variavel 'menssagemTentativas'
//o conteudo dela sera uma string usando crase onde vamos colocar o texto e a variavel que tera o numero de tentativas
//vamos criar duas variaveis dentro da nossa string, uma para dizer o numero de tentativas
// e outra para saber se vamos usar tentativas ou tentativa




// let numeroSecreto  =  gearNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
//         exibirTextoNaTela('p',menssagemTentativas);
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//             tentativas++;
//         }
//     }
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

//vamos fazer com que a cada vez q o usuario errar, o numero que ele digitou suma do input
//para isso vamos criar uma função 'limparCampo' que vai limpar o campo de input
//dentro da função vamos usar nossa variavel chute e atribuir a ela o campo input
//depois vamos setar o valor dela como uma string vazia usando a função value


// let numeroSecreto  =  gearNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
//         exibirTextoNaTela('p',menssagemTentativas);
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//         }
//         tentativas++;
//         limparCampo();
//     }
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = ('');
// }

//agora vamos fazer com que ao acertar, nosso botão 'novo jogo' seja abilitado
//no html podemos ver que esse botão tem um atributo nele 'disable' que é o que esta desabilitando ele
//e com esse atributo que temos que trabahar para que o botão fiquei ativado
//podemos reparar que temos 2 botoes se usamos o querySelector('button')
//o java script ira entender que estamos falando dos 2 botões e nesse caso queremos apenas o ultimo
//no html dele temos um atributo chamado de 'id' que é um identificador para ele
// e é a partir desse id que vamos referenciar esse botao
//no javascript temos uma função especifica para usar o id document.getElementById();
//nosso id é nesse caso o reiniciar
//e para remover o trabuto disable vamos usar a função '.removeAttribute('')' e vamos colocar o nome do atributo


// let numeroSecreto  =  gearNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
//         exibirTextoNaTela('p',menssagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//         }
//         tentativas++;
//         limparCampo();
//     }
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = ('');
// }

//o próximo passo é botar esso botão para funcionar mesmo e iniciar o jogo novamente
//primero no html vamos colocar no click desse botão a função 'reiniciarJogo()'
//dentro da nossa função vamos usar nossa outras funções para iniciar o jogo novamente
// primeiro vamos fazer a varivale do numero secreto receber um novo número usando a função gearNumeroAleatorio()
//depois vamos limpar o input com a função limparCampo()
//agora vamos tambem setar o numero de tentativas igual a 1
//por ultimo precisamos mudar nosso p e h1 usabdo a função exibirTextoNaTela() com os valores do inicio do jogo


// let numeroSecreto  =  gearNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1','Jogo do Número secreto');
// exibirTextoNaTela('p','Digite um número de 1 a 10');


// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
//         exibirTextoNaTela('p',menssagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//         }
//         tentativas++;
//         limparCampo();
//     }
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = ('');
// }

// function reiniciarJogo(){
//     numeroSecreto = gearNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirTextoNaTela('h1','Jogo do Número secreto');
//     exibirTextoNaTela('p','Digite um número de 1 a 10');
// }

//O unico problema ai é que dessa maneira se quisermos mudar o texto inicial precisamos alterar em duas partes
//para deixar isso mais eficiente vamos criar uma função 'exibirMenssagemInicial()'
// que sera responsavel por guardar esses valorer
// assim se quisermos fazer alguma alteração na menssagem fazemos uma vez minimizando chance de erros

//uma outra coisa que melhoraria nossa aplicação 
//é que quando reiniciamos o jogo o botão de novo jogo volte a estar disabilitado 
//para que o usuario tenha que jogar o jogo todo antes de reiniciar
//e da mesma maneira que removemos o atributo disbled vamos agora adiciona-lo
//porem agora no lugar de removeAttribute vamos usar 'setAttribute()'
//alem do disabled vamos adicionar uma virgula e colocar mais um atributo se queremos que ele seja abilitado ou nao
//para isso usamos o tipo boolean, true pora abilitado e flase para desabilitado

// let numeroSecreto  =  gearNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirMensagemInicial();

// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
//         exibirTextoNaTela('p',menssagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//         }
//         tentativas++;
//         limparCampo();
//     }
// }


// function exibirMensagemInicial(){ 
//     exibirTextoNaTela('h1','Jogo do Número secreto');
//     exibirTextoNaTela('p','Digite um número de 1 a 10');
// }

// function gearNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = ('');
// }

// function reiniciarJogo(){
//     numeroSecreto = gearNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled',true);
// }

//podemos ver que o jogo esta bem desenvolvido porem sempre tem espaço para mais alguns ajustes
//o que vamos fazer agora é fazer com que o jogo ao ser reeniciado nao repita os números anteriores
//para isso precisamos gardar em algum lugar todos os numeros que já foram o número secreto
//isso vamos usar um novo tipo de dado, o 'array'
//basicamente um array é uma variavel que pode receber varios valores sem substituir os anteiores
//para guardar e acessar esses valores os arrays usam indices que comessam em 0 e vao até o ultimo valor
//sendo assim o primerio valor esta no indice 0 o segundo 1, terceiro 2 ...
//temos uma função do javascript que serve tambem para saber quantos valores temos no nosso array '.length'
//para declarar um valor em um array sempre temos que colocar seu indice
//para isso colocamos seu nome seguindo de colchetes, e dentro deles o numero do indice
//console.log(idades[4]) : nesse caso estamos acessando o quinto valor do array idades
//vamos criar um array agora e adicionar nomes de linguagens de programação

//let linguagens = ['javascript','java','python','php','ruby','c#','c++','typescript']

//no nosso projeto vamos colocar um array com todos os números sorteados para q não sejam sorteados novamente
//essa lista tem que estar antes de gerarmos nosso numero aleatorio
//sendo assim vamos criar nosso array na primeira linha do nosso código e dizer que é um array usando []
//agora na nossa função gearNumeroAleatorio() vamos remover o return e atribuir nosso match.radom a variavel numeroEscolido
//abaixo vamos verificar se o a lista possui esse numero escolido usando um if
//no javascript isso é muito comun sendo assim temos um metodo '.includes()' que testa exatamente isso
//se isso for verdade vamos fazer algo chamado de recursão que é quando uma função chama ela mesma
//no nosso caso vamos sortear o número até que o número sorteado não esteja na lista
//no else vamos adiconar esse número sorteado a nossa lista para isso usamos a função '.push()'
//esse método adiciona um valor e sempre coloca ele ao fiunal se for um array
//e por ultimos no nosso else vamos retornar o valor do número escolido


// let listeNumerosSorteados = [];
// let numeroSecreto  =  gearNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela( tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirMensagemInicial();

// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1','Acertou!');
//         let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
//         exibirTextoNaTela('p',menssagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }else{
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
//         }else{
//             exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
//         }
//         tentativas++;
//         limparCampo();
//     }
// }


// function exibirMensagemInicial(){ 
//     exibirTextoNaTela('h1','Jogo do Número secreto');
//     exibirTextoNaTela('p','Digite um número de 1 a 10');
// }

// function gearNumeroAleatorio(){
//     let numeroEscolido = parseInt(Math.random() * 10 + 1);
//     if(listeNumerosSorteados.includes(numeroEscolido)){
//         gearNumeroAleatorio();
//     }else{
//         listeNumerosSorteados.push(numeroEscolido);
//         return numeroEscolido;
//     }
// }

// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = ('');
// }

// function reiniciarJogo(){
//     numeroSecreto = gearNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled',true);
// }

//o proximo passo é quando chegarmos no limite de números guardados na lista é limpar ela
//pois se não fizermos isso nosso jogo vai parrar quando o usuario atingir o limite de nuumeros
//vamos então criar uma váriavel que armazena a quantidade de elementos na lista
//essa variavel estará dentro da nossa função gearNumeroAleatorio()
//e ira receber a quantidade de valores dentro de listeNumerosSorteados usando o .length
//agora vamos verificar se já atingimos a quntidade maxima de elementos
//para isso vamos criar uma variavel com essa quantidade e usa-la no Match.randow, if e na função exibirMensagemInicial()
//se isso acontecer vamos fazer a listeNumerosSorteados receber um array vazio ( = [])

let listeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto  =  gearNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela( tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p',menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}


function exibirMensagemInicial(){ 
    exibirTextoNaTela('h1','Jogo do Número secreto');
    exibirTextoNaTela('p',`Digite um número de 1 a ${numeroLimite}`);
}

function gearNumeroAleatorio(){
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listeNumerosSorteados = [];
    }   
    
    if(listeNumerosSorteados.includes(numeroEscolido)){
        gearNumeroAleatorio();
    }else{
        listeNumerosSorteados.push(numeroEscolido);
        return numeroEscolido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ('');
}

function reiniciarJogo(){
    numeroSecreto = gearNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

//já temos o nosso jogo pronto, agora vamos colocar esse código na nuvem para que qualquer um possa jogar ele
//e para isso vamos usar o github
//para dizer que todos esses arquivos(app.js,index.htm,style.css) são de um mesmo projeto vamos criar um repositório
//um repositorio é um local onde armazenamos nossos projetos
//para criar o respositorio, podemos clicar em 'your repositories' ou no navegador excrever repo.new
//quando criamos um repositorio damos a ele um nome que identifique sobre oque é o projeto
//agora podemos arrastar nossos arquivos para dentro do repositório e por ultimo clicar em commit

//para fazer com que nosso jogo possa ser acessado por qualquer um vamos usar uma ferramenta chamada vercel
//o vercel aponta para um projeto do github nosso e faz a ação de deploy (disponibilizar) par as pessoas
//no site do vercel podemos logar com o github e simplismente clicar em import no repositorio escolhido
//depois podemos mudar o nome que os usuarios verao do porjeto e confirmar
//e assim nosso site está publicado