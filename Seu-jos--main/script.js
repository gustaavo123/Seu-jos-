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
                afirmacao: "Mesmo cansado, você agiu impulsivamente, sem considerar o momento certo para se aproximar das pessoas ao seu redor."
            
            },
            {
                texto: " Vou esperar ele terminar o calculo e posteriormente conversar com ele",
                afirmacao: "Desde cedo, você demonstrava paciência e respeito, esperando o tempo certo para ouvir e aprender com os mais experientes." 
            }
        ]
        },
    {

        enunciado: "Você chega na casa do seu avô josé depois de um dia cansativo De aula, ele está sentado no seu sofá com um charuto na mão e fazendo cálculos físicos",
        alternativas: [
            {
                texto: "(Vou ir falar com ele,puxar assunto) Seu josé se incomodou com você o interrompendo.",
                afirmacao:"Sua pressa em falar acabou criando uma barreira entre você e seu avô, dificultando o entendimento entre vocês."
            },
            {
                texto: "(Vou esperar ele terminar o calculo e posteriormente conversar com ele), José ficou feliz com você tendo esperado ele terminar o afazeres para falar com ele posteriormente.  ",
                afirmacao: "Seu avô viu em você alguém atento e maduro, pronto para ouvir e construir laços de confiança."
            
            }
        ]
    },
    {
        enunciado: "O seu josé faz a seguinte pergunta, Meu Neto, você prefere aprender conteudos de matematica ou fisica???",
        alternativas: [
            {
                texto: "Você diz que prefere resolver calculos fisicos do que matematicos.",
                afirmacao: "A física sempre te encantou com seus mistérios e desafios, e você não hesitou em seguir os passos do seu avô."
            
            },
            {
                texto: "Você diz que prefere resolver calculos matematicos do que fisicos.",
                afirmacao: "Apesar das influências, você escolheu o seu próprio caminho, se aprofundando no raciocínio lógico e abstrato da matemática."

            }
        ]
    },
    {
  
       
        enunciado: "O seu josé faz a seguinte pergunta, Meu Neto, você prefere aprender conteudos de matematica ou fisica???",
        alternativas: [
            {
                texto: "(Você diz que prefere resolver calculos fisicos do que matematicos) Seu josé ficou extremamente feliz que seu neto quer seguir os mesmos passos do avô",
                afirmacao: "O orgulho brilhou nos olhos do seu avô ao perceber que sua paixão pela física agora corria também nas suas veias."
            },
            {
                texto: "(Você diz que prefere resolver calculos matematicos do que fisicos).Seu josé ficou muito decepcionado com você",
                afirmacao: "Seu avô, preso à sua visão de mundo, teve dificuldade em aceitar sua escolha por outro caminho."
            }
        ]
    },
    {
        enunciado: "E para ter certeza que vocẽ vai seguir o legado dele, seu josé faz o ultimo teste com você, ele pede para você descobrir a resposta da charada dele, a charada é o seguinte (Eu sou invisível, mas posso ser visto com a ajuda de um campo magnético. Minha velocidade pode ser quase igual à da luz, mas nunca a ultrapasso. Eu sou a razão de muitos dispositivos eletrônicos funcionarem, mas, ao mesmo tempo, posso ser tão traiçoeiro quanto a eletricidade. Quem sou eu?)",
        alternativas: [
            {
                texto: "Você diz que é o Eletron, e explica para ele a razão de ser o eletron",
                afirmacao: "Sua resposta certeira à charada revelou não apenas conhecimento, mas também dedicação e compreensão profunda dos conceitos científicos."
            },
            {
                texto: "Você diz ser o próton, e explica para ele a razão de ser o próton.",
                afirmacao: "Mesmo errando a resposta da charada, sua tentativa demonstrou coragem e vontade de aprender com os próprios erros."
            }
        ]
    },
    {
        enunciado: "E para ter certeza que vocẽ vai seguir o legado dele, seu josé faz o ultimo teste com você, ele pede para você descobrir a resposta da charada dele, a charada é o seguinte (Eu sou invisível, mas posso ser visto com a ajuda de um campo magnético. Minha velocidade pode ser quase igual à da luz, mas nunca a ultrapasso. Eu sou a razão de muitos dispositivos eletrônicos funcionarem, mas, ao mesmo tempo, posso ser tão traiçoeiro quanto a eletricidade. Quem sou eu?)",
        alternativas: [
            {
                texto: "(Você diz que é o Eletron, e explica para ele a razão de ser o eletron) VOCÊ ACERTOU, Seu josé está extremamente feliz com você e agora tem certeza que você vai seguir os passos dele no futuro, ele tem orgulho de te ter como neto.",
                afirmacao: "A partir daquele momento, seu avô nunca mais teve dúvidas: você era digno de continuar o legado da família."
            },
            {
                texto: "(Você diz ser o próton, e explica para ele a razão de ser o próton). VOCÊ ERROU, Seu josé esta muito triste com você por ter errado a charada",
                afirmacao: "O erro final foi duro, mas necessário: você entendeu que falhar também é parte do processo de crescimento."
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
    caixaPerguntas.textContent = "Em 2025...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();