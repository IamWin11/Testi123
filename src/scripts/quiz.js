const quizData1 = [
    {
        question: "7*7?",
        a: "49",
        b: "56",
        c: "42",
        d: "35",
        correct: "a",
    },
    {
        question: "24/3",
        a: "8",
        b: "9",
        c: "12",
        d: "3",
        correct: "a",
    },
    {
        question: "Setelah bilangan 7 adalah?",
        a: "4",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "6, …., 8,….. Bilangan yang tepat untuk mengisi titik-titik adalah…",
        a: "5, 7",
        b: "7, 9",
        c: "6, 8",
        d: "10.11",
        correct: "b",
    },
    {
        question: "35 dibaca…",
        a: "Tiga lima",
        b: "Tiga dan lima",
        c: "Tiga puluh lima",
        d: "nLima tiga",
        correct: "c",
    },
];

const quizData2 = [
    {
        question: " (32 + 7) + 20 = ",
        a: "59",
        b: "39",
        c: "18",
        d: "49",
        correct: "a",
    },
    {
        question: "Bentuk penjumlahan yang benar adalah…",
        a: "41 + 26 = 46 + 21",
        b: "72 +16 = 12 + 76",
        c: "24 + 13 = 13 + 24",
        d: "56 + 80 = 99 + 9",
        correct: "b",
    },
    {
        question: "Jumlah penduduk di Desa Suka maju ada 180 orang. Jika rencana Desa Sukamaju untuk memindahkan semua penduduk sebanyak 60 orang ke Desa Sukasari, berapa jumlah orang yang belum pindah…",
        a: "130 orang",
        b: "120 orang",
        c: "110 orang",
        d: "160 orang",
        correct: "b",
    },
    {
        question: "Berikut ini yang termasuk bilangan genap adalah….",
        a: "130",
        b: "129",
        c: "111",
        d: "163",
        correct: "a",
    },
    {
        question: "465 … 454. Kata yang tepat untuk mengisi titik-titik adalah…",
        a: "Lebih besar daripada",
        b: "Lebih kecil daripada",
        c: "Sama dengan",
        d: "lebih baik berdoa",
        correct: "a",
    },
];

const quizData3 = [
    {
        question: "Ibu membeli 2kg terigu, 4 kg telur, dan 6kg gula pasir. Berapa loncatan angka pada masing-masing bilangan…",
        a: "3",
        b: "2",
        c: "6",
        d: "8",
        correct: "b",
    },
    {
        question: "April mengerjakan PR dari nomor 12-18, urutan bilangan angka 12-18 adalah…",
        a: "14,15,16,17,13",
        b: "13,14,15,16,17",
        c: "15,14,13,16,17",
        d: "10,11,24,25,24",
        correct: "b",
    },
    {
        question: "Hasil dari 3 x 22 adalah…",
        a: "55",
        b: "66",
        c: "77",
        d: "88",
        correct: "b",
    },
    {
        question: "Bentuk pembagian dari 18 – 3 – 3 – 3 – 3 – 3 – 3 = 0 adalah…",
        a: "18 : 3 = 6",
        b: "18 : 5 = 5",
        c: "18 : 6 = 3",
        d: "18 : 7 = 9",
        correct: "a",
    },
    {
        question: "Mulyono memanen 780 buah rambutan. Semua buah disimpan ke tiga keranjang dengan jumlah yang sama banyak. Berapa banyak rambutan yang terdapat dalam satu keranjang…",
        a: "250",
        b: "260",
        c: "270",
        d: "485",
        correct: "b",
    },
];

const rulesContainer = document.getElementById('rules');
const quiz1Btn = document.getElementById('quiz1');
const quiz2Btn = document.getElementById('quiz2');
const quiz3Btn = document.getElementById('quiz3');
const viewScoresBtn = document.getElementById('viewScoress');
const quizContainer = document.getElementById('quiz-container');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const timerEl = document.getElementById('timer');
const scoresContainer = document.getElementById('scores-container');
const scoresEl = document.getElementById('scores');

let currentQuizData = [];
let currentQuiz = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let currentQuizName = '';

const scores = {
    quiz1: null,
    quiz2: null,
    quiz3: null,
};

quiz1Btn.addEventListener('click', () => startQuiz(quizData1, 'quiz1'));
quiz2Btn.addEventListener('click', () => startQuiz(quizData2, 'quiz2'));
quiz3Btn.addEventListener('click', () => startQuiz(quizData3, 'quiz3'));
viewScoresBtn.addEventListener('click', showScores);

function startQuiz(quizData, quizName) {
    currentQuizData = quizData;
    currentQuizName = quizName;
    rulesContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    timeLeft = 60;
    score = 0;
    currentQuiz = 0;
    startTimer();
    loadQuiz();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText =` Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizItem = currentQuizData[currentQuiz];

    questionEl.innerText = currentQuizItem.question;
    a_text.innerText = currentQuizItem.a;
    b_text.innerText = currentQuizItem.b;
    c_text.innerText = currentQuizItem.c;
    d_text.innerText = currentQuizItem.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function endQuiz() {
    const scorePercentage = Math.round((score / currentQuizData.length) * 100);
    scores[currentQuizName] = scorePercentage;
    quizContainer.style.display = 'none';
    rulesContainer.style.display = 'block';
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === currentQuizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < currentQuizData.length) {
            loadQuiz();
        } else {
            clearInterval(timerInterval);
            endQuiz();
        }
    }
});

function showScores() {
    rulesContainer.style.display = 'none';
    scoresContainer.style.display = 'block';

    scoresEl.innerHTML = `
        <p>Quiz 1: ${scores.quiz1 !== null ? scores.quiz1 + '' : 'Not taken yet'}</p>
        <p>Quiz 2: ${scores.quiz2 !== null ? scores.quiz2 + '' : 'Not taken yet'}</p>
        <p>Quiz 3: ${scores.quiz3 !== null ? scores.quiz3 + '' : 'Not taken yet'}</p>
    `;
}