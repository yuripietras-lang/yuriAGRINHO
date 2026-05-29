// Banco de perguntas focado no tema do Agrinho (Sustentabilidade e Agro Forte)
const questions = [
    {
        question: "Qual das seguintes práticas ajuda a proteger o solo contra a erosão e mantém os nutrientes?",
        options: [
            "Queimada controlada constante",
            "Plantio Direto (sobre a palhada da colheita anterior)",
            "Deixar o solo totalmente descoberto",
            "Uso excessivo de tratores pesados na chuva"
        ],
        correct: 1,
        feedback: "Isso aí! O Plantio Direto evita a erosão e preserva a umidade do solo!"
    },
    {
        question: "Para economizar água na irrigação da lavoura, qual é o método mais eficiente e sustentável?",
        options: [
            "Irrigação por gotejamento",
            "Alagamento de toda a área plantada",
            "Uso de mangueiras comuns ligadas o dia todo",
            "Esperar apenas pela água da chuva sem planejamento"
        ],
        correct: 0,
        feedback: "Perfeito! O gotejamento leva a quantidade exata de água direto à raiz da planta."
    },
    {
        question: "O que é o Controle Biológico nas plantações?",
        options: [
            "Eliminar todos os insetos com produtos químicos fortes",
            "Mudar o clima da região artificialmente",
            "Usar inimigos naturais (como joaninhas) para combater pragas",
            "Trocar as plantas de lugar todos os dias"
        ],
        correct: 2,
        feedback: "Excelente! Usar a própria natureza para combater pragas reduz a necessidade de defensivos químicos."
    },
    {
        question: "Qual é uma vantagem da Integração Lavoura-Pecuária-Floresta (ILPF)?",
        options: [
            "Diminui a produção de alimentos da fazenda",
            "Otimiza o uso da terra, recupera pastagens e diversifica a renda",
            "Exige o desmatamento de novas áreas de floresta nativa",
            "Serve apenas para enfeitar a propriedade rural"
        ],
        correct: 1,
        feedback: "Certo! A ILPF melhora o solo, gera sombra para o gado e traz mais renda de forma sustentável."
    },
    {
        question: "Como a tecnologia (como drones e sensores) ajuda o Agro Sustentável do futuro?",
        options: [
            "Não ajuda em nada, apenas encarece o processo",
            "Substitui totalmente a presença humana e o carinho com a terra",
            "Permite aplicar insumos e água apenas onde é realmente necessário, evitando desperdício",
            "Serve apenas para tirar fotos bonitas da fazenda"
        ],
        correct: 2,
        feedback: "Sensacional! A tecnologia no campo (Agro 4.0) traz precisão e evita o desperdício de recursos."
    }
];

// Evolução visual da plantação
const farmStages = ["🌱", "🌿", "🥦", "🌻", "🌳"];
const farmStatuses = [
    "A fazenda está começando!",
    "As primeiras folhas surgiram com suas boas escolhas!",
    "Sua horta está crescendo forte e saudável!",
    "Muito bem! A fazenda está florindo com sustentabilidade!",
    "Incrível! Você criou um ecossistema agro forte e 100% sustentável!"
];

let currentQuestionIndex = 0;
let score = 0;

// Elementos da Tela
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score');
const farmStage = document.getElementById('farm-stage');
const farmStatus = document.getElementById('farm-status');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const finalPoints = document.getElementById('final-points');

// Eventos
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartGame);

function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    
    questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    questionText.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('
