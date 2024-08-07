const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A maioria das pessoas tem amizades superficiais e poucas investem seu tempo nas redes em atividades realmente importantes, e outras apenas perdem tempo nas redes, não adicionando conhecimentos nem aproveitando tudo oque a tecnologia pode nos proporcionar.",
        alternativas: [
            {
                texto: "Eu invisto tempo nas redes.",
                afirmacao: "Eu invisto procurando e pesquisando imformações que tenho curiosidade, aprendendo novas coisas., "
            },
            {
                texto: "Eu perco meu tempo nas redes.",
                afirmacao: "Penso que as redes foram criadas apenas para distrações, e passar tempo"
            }
        ]
    },
    {
        enunciado: "Uma pesquisa internacional feita por um site de tecnologia mostrou que os brasileiros são praticamente recordistas em tempo conectado a telas de celulasres ou outros eletrônicos. apopulação fica em média nove horas e meia por dia.",
        alternativas: [
            {
                texto: "Você fica mais de 9 horas investindo seu tempo nas redes.",
                afirmacao: "Se estou aprendendo e investindo o meu tempo nas redes, é uma boa escolha."
            },
            {
                texto: "Você fica mais de 9 horas nas redes apenas por distração.",
                afirmacao: "fico nas redes mesmo sabendo que não estou ganhando nada com essa ação."

            }
        ]
    },
    {
        enunciado: "As redes sociais têm um impacto significativo na comunicação e creatividade, com benefícios evidentes para a manumteção de relaciomamentos, expanção de redes profissionais e acesso a imformações. no entanto, é crucial estar ciente dos desaficios, com a superficialidas das intereções e a potencial a propagação de desinformação.",
        alternativas: [
            {
                texto: "Você se da bem com a tecnologia.",
                afirmacao: "Me dou bem com a tecnologia, acho fácil e gosto de mecher nas redes"
            },
            {
                texto: "você se da bem com a tecnologia.",
                afirmacao: "Não me dou bem com a tecnologia acho muito complicado, mas tenho vontade de aprender."
            }
        ]
    },
    {
        enunciado: "Enunciado 4",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 5",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
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
