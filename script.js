const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você chega na casa do seu avô josé depois de um dia cansativo De aula, ele está sentado no seu sofá com um charuto na mão e fazendo cálculos físicos",
        alternativas: [
            {
                texto: "Vou ir falar com ele, puxar assunto",
                afirmacao: "Arroz é bom"
            
            },
            {
                texto: " Vou esperar ele terminar o calculo e posteriormente conversar com ele",
                afirmacao: "Quano chega na caa do avô José, espra ele terminar sua conta para então iniciar uma conversa, "
            }
        ]
    },
    {

        enunciado: "Você chega na casa do seu avô josé depois de um dia cansativo De aula, ele está sentado no seu sofá com um charuto na mão e fazendo cálculos físicos",
        alternativas: [
            {
                texto: "(Vou ir falar com ele,puxar assunto) Seu josé se incomodou com você o interrompendo, você foi expulso da casa dele, REINICIE O JOGO              ",
                afirmacao: "durante a conversa falaram sobre X"
            },
            {
                texto: "(Vou esperar ele terminar o calculo e posteriormente conversar com ele), José ficou feliz com você tendo esperado ele terminar o afazeres para falar com ele posteriormente, AVANÇE NA AVENTURA  ",
                afirmacao: "durante a conversa falaram sobre Y"
            }
        ]
    },
    {
        enunciado: "O seu josé faz a seguinte pergunta, Meu Neto, você prefere aprender conteudos de matematica ou fisica???",
        alternativas: [
            {
                texto: "Você diz que prefere resolver calculos fisicos do que matematicos.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Você diz que prefere resolver calculos matematicos do que fisicos.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
  
       
        enunciado: "O seu josé faz a seguinte pergunta, Meu Neto, você prefere aprender conteudos de matematica ou fisica???",
        alternativas: [
            {
                texto: "(Você diz que prefere resolver calculos fisicos do que matematicos) Seu josé ficou extremamente feliz que seu neto quer seguir os mesmos passos do avô, PROSSIGA NA HISTÓRIA",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "(Você diz que prefere resolver calculos matematicos do que fisicos).Seu josé ficou muito decepcionado com você, e ele não vai aceitar um neto como vocẽ na casa dele, REINICIE O JOGO",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "E para ter certeza que vocẽ vai seguir o legado dele, seu josé faz o ultimo teste com você, ele pede para você descobrir a resposta da charada dele, a charada é o seguinte (Eu sou invisível, mas posso ser visto com a ajuda de um campo magnético. Minha velocidade pode ser quase igual à da luz, mas nunca a ultrapasso. Eu sou a razão de muitos dispositivos eletrônicos funcionarem, mas, ao mesmo tempo, posso ser tão traiçoeiro quanto a eletricidade. Quem sou eu?)",
        alternativas: [
            {
                texto: "Você diz que é o Eletron, e explica para ele a razão de ser o eletron",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Você diz ser o próton, e explica para ele a razão de ser o próton.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "E para ter certeza que vocẽ vai seguir o legado dele, seu josé faz o ultimo teste com você, ele pede para você descobrir a resposta da charada dele, a charada é o seguinte (Eu sou invisível, mas posso ser visto com a ajuda de um campo magnético. Minha velocidade pode ser quase igual à da luz, mas nunca a ultrapasso. Eu sou a razão de muitos dispositivos eletrônicos funcionarem, mas, ao mesmo tempo, posso ser tão traiçoeiro quanto a eletricidade. Quem sou eu?)",
        alternativas: [
            {
                texto: "(Você diz que é o Eletron, e explica para ele a razão de ser o eletron) VOCÊ ACERTOU, Seu josé está extremamente feliz com você e agora tem certeza que você vai seguir os passos dele no futuro, ele tem orgulho de te ter como neto, VOCẼ CONSEGUIU A CONFIANÇA DO SEU AVÔ, PARABÉNS!!!!" ,
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "(Você diz ser o próton, e explica para ele a razão de ser o próton). VOCÊ ERROU, Seu josé esta muito triste com você por ter errado a charada, REINICIE O JOGO",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();