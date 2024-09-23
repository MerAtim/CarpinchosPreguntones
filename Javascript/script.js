let player1 = '';
let player2 = '';
let scores = { player1: 0, player2: 0 };
let currentCategory = '';
let currentPlayer = 'player1';
let selectedCategory = '';
let currentQuestionIndex = 0;
let roundCounter = 0;
let playerScore = 0; // Puntuación del jugador
let questions = {
    'Ciencia': [
        { question: "¿Cuál es la fórmula del agua?", options: ["H2O", "CO2", "O2"], answer: "H2O" },
        { question: "¿Cuál es el planeta más cercano al sol?", options: ["A) Tierra", "B) Marte", "C) Mercurio", "D) Venus"], answer: "C) Mercurio" },
        { question: "¿En qué año llegó el hombre a la luna?", options: ["A) 1969", "B) 1955", "C) 1972", "D) 1981"], answer: "A) 1969" },
        { question: "¿Cuál es el metal más abundante en la Tierra?", options: ["A) Aluminio", "B) Hierro", "C) Cobre", "D) Oro"], answer: "A) Aluminio" },
        { question: "¿Cuál es el animal terrestre más rápido?", options: ["A) Guepardo", "B) Leopardo", "C) Tigre", "D) Caballo"], answer: "A) Guepardo" },
        { question: "¿Qué inventor creó la bombilla incandescente?", options: ["A) Nikola Tesla", "B) Thomas Edison", "C) Alexander Graham Bell", "D) Benjamin Franklin"], answer: "B) Thomas Edison" },
        { question: "¿Qué gas es esencial para la respiración?", options: ["A) Oxígeno", "B) Nitrógeno", "C) Hidrógeno", "D) Dióxido de carbono"], answer: "A) Oxígeno" }
    ],
    'Historia': [
        { question: "¿Quién fue el primer presidente de EE.UU.?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: "George Washington" },
        { question: "¿Quién pintó la Mona Lisa?", options: ["A) Pablo Picasso", "B) Leonardo da Vinci", "C) Vincent van Gogh", "D) Claude Monet"], answer: "B) Leonardo da Vinci" },
        { question: "¿En qué año se descubrió América?", options: ["A) 1452", "B) 1492", "C) 1512", "D) 1532"], answer: "B) 1492" },
        { question: "¿En qué año comenzó la Primera Guerra Mundial?", options: ["A) 1912", "B) 1914", "C) 1918", "D) 1939"], answer: "B) 1914" },
        { question: "¿Qué civilización antigua construyó las pirámides de Giza?", options: ["A) Los mayas", "B) Los romanos", "C) Los egipcios", "D) Los griegos"], answer: "C) Los egipcios" },
        { question: "¿Quién fue el líder de la Revolución Cubana?", options: ["A) Fidel Castro", "B) Che Guevara", "C) Hugo Chávez", "D) Salvador Allende"], answer: "A) Fidel Castro" },
        { question: "¿Cuál fue el principal objetivo de la Ruta de la Seda?", options: ["A) Comercio de especias", "B) Difundir el cristianismo", "C) Transporte de oro", "D) Conectar Asia y Europa"], answer: "D) Conectar Asia y Europa" }
    ],
    'Geografia': [
        { question: "¿Cuál es la capital de Francia?", options: ["A) Madrid", "B) París", "C) Berlín", "D) Roma"], answer: "B) París" },
        { question: "¿Cuál es el río más largo del mundo?", options: ["A) Amazonas", "B) Nilo", "C) Yangtsé", "D) Misisipi"], answer: "B) Nilo" },
        { question: "¿Cuál es la ciudad más poblada del mundo?", options: ["A) Tokio", "B) Nueva York", "C) Shanghái", "D) Mumbai"], answer: "A) Tokio" },
        { question: "¿Cuál es el océano más grande del mundo?", options: ["A) Atlántico", "B) Índico", "C) Pacífico", "D) Ártico"], answer: "C) Pacífico" },
        { question: "¿Cuál es la montaña más alta del mundo?", options: ["A) Monte Everest", "B) K2", "C) Monte Fuji", "D) Aconcagua"], answer: "A) Monte Everest" },
        { question: "¿Cuál es el país más grande del mundo?", options: ["A) Canadá", "B) China", "C) Rusia", "D) Estados Unidos"], answer: "C) Rusia" },
        { question: "¿En qué continente se encuentra Egipto?", options: ["A) Asia", "B) Europa", "C) África", "D) América"], answer: "C) África" }
    ],
    'Cultura General': [
        { question: "¿Cuál es el idioma más hablado en el mundo?", options: ["A) Inglés", "B) Mandarín", "C) Español", "D) Hindi"], answer: "B) Mandarín" },
        { question: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["A) Gabriel García Márquez", "B) William Shakespeare", "C) Miguel de Cervantes", "D) Jorge Luis Borges"], answer: "C) Miguel de Cervantes" },
        { question: "¿Cuál es el órgano más grande del cuerpo humano?", options: ["A) Corazón", "B) Pulmones", "C) Piel", "D) Hígado"], answer: "C) Piel" },
        { question: "¿Qué país es conocido como la tierra del sol naciente?", options: ["A) Corea del Sur", "B) China", "C) Japón", "D) Tailandia"], answer: "C) Japón" },
        { question: "¿Cuál es el símbolo químico del oro?", options: ["A) Au", "B) Ag", "C) Pb", "D) Fe"], answer: "A) Au" },
        { question: "¿Qué es el eucalipto?", options: ["A) Un tipo de animal", "B) Un árbol", "C) Un mineral", "D) Un río"], answer: "B) Un árbol" },
        { question: "¿Qué planeta es conocido como el 'Planeta Rojo'?", options: ["A) Venus", "B) Marte", "C) Júpiter", "D) Saturno"], answer: "B) Marte" },
        { question: "¿Cuál es la capital de Japón?", options: ["A) Seúl", "B) Beijing", "C) Tokio", "D) Bangkok"], answer: "C) Tokio" },
        { question: "¿Qué instrumento musical tiene seis cuerdas?", options: ["A) Piano", "B) Violonchelo", "C) Guitarra", "D) Trompeta"], answer: "C) Guitarra" },
        { question: "¿Quién escribió 'Cien años de soledad'?", options: ["A) Gabriel García Márquez", "B) Julio Cortázar", "C) Jorge Luis Borges", "D) Mario Vargas Llosa"], answer: "A) Gabriel García Márquez" }
    ],
    'Deportes': [
        { question: "¿Cuál es el deporte más popular del mundo?", options: ["A) Baloncesto", "B) Fútbol", "C) Tenis", "D) Natación"], answer: "B) Fútbol" },
        { question: "¿Quién tiene el récord de más goles en la historia del fútbol?", options: ["A) Cristiano Ronaldo", "B) Pelé", "C) Lionel Messi", "D) Diego Maradona"], answer: "A) Cristiano Ronaldo" },
        { question: "¿En qué deporte se utiliza una raqueta y una pelota amarilla?", options: ["A) Tenis", "B) Squash", "C) Badminton", "D) Ping-pong"], answer: "A) Tenis" },
        { question: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?", options: ["A) Alemania", "B) Francia", "C) Brasil", "D) Argentina"], answer: "B) Francia" },
        { question: "¿Cuál es la distancia de un maratón?", options: ["A) 30 km", "B) 42.195 km", "C) 50 km", "D) 21 km"], answer: "B) 42.195 km" },
        { question: "¿Qué jugador de baloncesto es conocido como 'MJ'?", options: ["A) Kobe Bryant", "B) Michael Jordan", "C) LeBron James", "D) Larry Bird"], answer: "B) Michael Jordan" },
        { question: "¿En qué deporte se realizan los '400 metros lisos'?", options: ["A) Natación", "B) Atletismo", "C) Ciclismo", "D) Esquí"], answer: "B) Atletismo" },
        { question: "¿Qué país es conocido por su equipo de rugby All Blacks?", options: ["A) Australia", "B) Sudáfrica", "C) Nueva Zelanda", "D) Inglaterra"], answer: "C) Nueva Zelanda" }
    ]
};

function spinWheel() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    selectedCategory = categories[randomIndex];
    document.getElementById('category-display').innerText = `Categoría seleccionada: ${selectedCategory}`;
    document.getElementById('start-quiz').style.display = 'block';
}

function startGame() {
    const username1 = document.getElementById('username1').value;
    const username2 = document.getElementById('username2').value;

    if (username1 && username2) {
        document.getElementById('home-container').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        document.getElementById('welcome-message').innerText = `¡Bienvenido, ${username1} y ${username2}!`;
        // Inicializa las variables de puntuación y otros elementos del juego aquí
        scores = {
            player1: 0,
            player2: 0
        };
        currentPlayer = 'player1'; // Comienza con el jugador 1
        roundCounter = 0;
        updateScoreDisplay(username1, username2);
        playRounds(); // Llama a la función para comenzar las rondas
    } else {
        alert('Por favor, ingresa los nombres de ambos jugadores.');
    }
}

function updateScoreDisplay(username1, username2) {
    const scoreDisplay = document.getElementById('score-display'); // Asegúrate de que existe en tu HTML
    scoreDisplay.textContent = `${username1}: ${scores.player1} | ${username2}: ${scores.player2}`;
}

if (roundCounter < 3) {
    chooseCategory(); // Permite elegir categoría al inicio de cada ronda
    const question = getQuestion(currentCategory);
    const answer = prompt(`Turno de ${currentPlayer}: ${question}`);

    if (checkAnswer(answer)) {
        alert("¡Respuesta correcta!");
        scores[currentPlayer]++;
        if (confirm("¿Quieres cambiar de categoría?")) {
            chooseCategory(); // Permite cambiar categoría
        }
    } else {
        alert("Respuesta incorrecta.");
        currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'; // Cambia de jugador
    }

    roundCounter++;
    playRounds(); // Llama de nuevo a la función para la siguiente ronda
} else {
    announceWinner(); // Llama a la función para anunciar el ganador al final de las rondas
}

function chooseCategory() {
    const categoriesList = categories.join(', ');
    currentCategory = prompt(`Elige una categoría de las siguientes: ${categoriesList}`);
}

function announceWinner() {
    const winner = scores.player1 > scores.player2 ? 'Jugador 1' : 'Jugador 2';
    alert(`¡Juego Terminado! Ganador: ${winner}`);
}

function startQuiz() {
    document.getElementById('wheel-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    loadQuestions();
}

function loadQuestions() {
    const categoryQuestions = questions[selectedCategory];
    categoryQuestions.sort(() => Math.random() * 3);
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');

    const currentQuestion = questions[selectedCategory][currentQuestionIndex]; // Usa la categoría seleccionada
    questionElement.textContent = currentQuestion.question;

    // Limpiar opciones anteriores
    optionsElement.innerHTML = '';

    // Generar opciones
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    nextBtn.disabled = true;
    nextBtn.style.display = 'none';
}

function checkAnswer(selected) {
    const currentQuestion = questions[selectedCategory][currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    console.log(`Respuesta seleccionada: ${selected}`);
    console.log(`Respuesta correcta: ${correctAnswer}`);

    const resultDiv = document.getElementById('result');

    // Comparar las respuestas eliminando espacios
    if (selected.trim() === correctAnswer.trim()) {
        scores++;
        resultDiv.innerHTML = '<p style="color: green;">¡Correcto!</p>';
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Incorrecto. La respuesta correcta es ${correctAnswer}</p>`;
    }

    // Deshabilitar opciones después de seleccionar
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);

    // Mostrar botón de siguiente
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false;
    nextBtn.style.display = 'inline';
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[selectedCategory].length) { // Usa la categoría seleccionada
        document.getElementById('result').innerHTML = '';
        loadQuestion();
    } else {
        endGame();
    }
}

function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('category-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    loadQuestions(); // Llama a la función que carga las preguntas
}

function endGame() {
    const scoreDisplay = document.getElementById('score-display');
    const currentPlayerDisplay = document.getElementById('current-player');

    // Mostrar la puntuación final
    scoreDisplay.textContent = `Puntuación final: ${scores.player1} - ${scores.player2}`;

    // Mostrar el jugador actual
    currentPlayerDisplay.textContent = `Jugador actual: ${currentPlayer === 'player1' ? 'Jugador 1' : 'Jugador 2'}`;

    // Mostrar el botón de reiniciar solo si no existe ya
    let restartBtn = document.getElementById('restart-btn');
    if (!restartBtn) {
        restartBtn = document.createElement('button');
        restartBtn.id = 'restart-btn'; // Asignar ID para evitar duplicados
        restartBtn.textContent = 'Reiniciar Juego';
        restartBtn.onclick = restartGame; // Llama a la función para reiniciar el juego
        document.getElementById('game-container').appendChild(restartBtn);
    }
}

function restartGame() {
    // Reinicia las puntuaciones y otras variables
    scores.player1 = 0;
    scores.player2 = 0;
    currentPlayer = 'player1'; // Comienza con el jugador 1
    roundCounter = 0;

    // Limpia la pantalla de puntuaciones y mensajes
    document.getElementById('score-display').textContent = '';
    document.getElementById('current-player').textContent = '';

    // Oculta el contenedor del juego y muestra el contenedor de inicio
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('home-container').style.display = 'block';
    
    // Elimina el botón de reinicio si existe
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.remove();
    }

}

// Asegúrate de actualizar las puntuaciones en tu lógica de juego.
function updateScore(player) {
    if (player === 'player1') {
        scores.player1++;
    } else {
        scores.player2++;
    }
}