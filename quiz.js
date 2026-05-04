const quizQuestions = [
    {
        question: "¿Por qué el manejo de material pirotécnico representa un riesgo inherente?",
        options: [
            "Por el costo de los insumos químicos.",
            "Por la naturaleza y propiedades de las sustancias y su factibilidad de iniciación accidental.",
            "Debido a la falta de transporte adecuado.",
            "Por el ruido que generan al ser almacenados."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué requisitos son necesarios para reducir los accidentes en el manejo de pirotecnia?",
        options: [
            "Rapidez y fuerza física.",
            "Conocimientos, experiencia y responsabilidad.",
            "Solo equipo de protección personal.",
            "Herramientas de metal de alta resistencia."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes es una forma de iniciación accidental?",
        options: [
            "Por exposición al vacío.",
            "Por fuego, chispa o agua.",
            "Por ondas de radio de baja frecuencia.",
            "Por contacto con madera seca."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué otros factores, además del fuego y chispa, pueden iniciar un artificio?",
        options: [
            "Presión atmosférica y gravedad.",
            "Fricción, choque, calor y electricidad estática.",
            "Luz artificial y sonido.",
            "Por el simple paso del tiempo."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué característica definen a los oxidantes (ej. nitratos, cloratos)?",
        options: [
            "Son liberadores de oxígeno.",
            "Son materiales altamente combustibles.",
            "Son resistentes al agua.",
            "Son gases inertes."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué ocurre al interactuar oxidantes con ácidos inorgánicos (sulfúrico o nítrico)?",
        options: [
            "Se neutralizan inmediatamente.",
            "Se generan reacciones violentas.",
            "No ocurre ninguna reacción.",
            "Se solidifican."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es más probable que generen los metales en polvo al mezclarse con agua?",
        options: [
            "Reducción de temperatura.",
            "Acumulación de calor y riesgo de explosión (Gas Hidrógeno).",
            "Evitan la humedad.",
            "Nada, son estables."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué vestuario es obligatorio para la destrucción de artificios?",
        options: [
            "Uniforme de fatiga de algodón normal.",
            "Uniforme o ropa retardante a la flama.",
            "Traje NBQ.",
            "Ropa civil sintética."
        ],
        correctAnswer: 1
    },
    {
        question: "¿De qué material deben estar hechos los lentes protectores de seguridad (goggles)?",
        options: [
            "Vidrio templado.",
            "Plástico acrílico.",
            "Policarbonato antiflama.",
            "Cristal blindado."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué tipo de extintor debe estar presente en el área de trabajo?",
        options: [
            "Agua a presión.",
            "CO2.",
            "Polvo Químico Seco (PQS) ABC.",
            "Espuma mecánica."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué se debe desechar de una mecha lenta antes de su uso?",
        options: [
            "50 cm del recubrimiento.",
            "El recubrimiento exterior.",
            "Los primeros 10 cm del extremo por posible absorción de humedad.",
            "No se debe desechar nada."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Para qué categorías de artificios es aplicable el Método de destrucción por fuego?",
        options: [
            "Categoría III únicamente.",
            "Categoría I y II.",
            "Pólvora a granel.",
            "Material metálico pesado."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué espesor máximo debe tener el tendido del material en la cama de destrucción?",
        options: [
            "5 cm.",
            "10 cm.",
            "15 cm.",
            "20 cm."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuántas piezas máximo de Crisantemos o Cohetones se permiten por cada tendido?",
        options: [
            "1 pieza.",
            "5 piezas.",
            "10 piezas.",
            "50 piezas."
        ],
        correctAnswer: 1
    },
    {
        question: "¿A qué clase de sustancias peligrosas pertenecen los explosivos y artificios pirotécnicos según la ONU?",
        options: [
            "Clase 3 (Inflamables).",
            "Clase 1 (Explosivos).",
            "Clase 5 (Oxidantes).",
            "Clase 9 (Misceláneos)."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Sobre qué elementos se debe estibar o colocar el material obligatoriamente?",
        options: [
            "Láminas de metal.",
            "Pasto seco directamente en el suelo.",
            "Cajas o polines de madera tratada.",
            "En la batea del vehículo."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué tipo de herramienta se debe usar para trabajos mecánicos (corte o manipulación) sobre el explosivo?",
        options: [
            "Navajas de acero inoxidable.",
            "Instrumental de madera, goma o cerámica blanca.",
            "Tijeras de metal común.",
            "Alicates."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué se recomienda hacer antes de sumergir un crisantemo en diésel?",
        options: [
            "Perforar el cartón para que entre rápido el diésel.",
            "Inmersión profunda y prolongada para que penetre la carga.",
            "Quitar la mecha con pinzas de metal.",
            "Friccionar la superficie exterior."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué precaución específica se debe tener con los Cohetones antes de destruirlos?",
        options: [
            "Retirada obligatoria de la vara de madera estabilizadora.",
            "Cortar el motor a la mitad.",
            "Hervirlos en agua.",
            "Encender la mecha."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el tiempo mínimo de espera tras finalizar una quema para verificar el área?",
        options: [
            "5 min.",
            "15 min.",
            "30 min.",
            "1 hora."
        ],
        correctAnswer: 2
    }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initQuiz() {
    try {
        console.log("Iniciando quiz...");
        // Seleccionar 10 preguntas al azar
        const shuffled = shuffleArray([...quizQuestions]);
        selectedQuestions = shuffled.slice(0, 10);
        currentQuestionIndex = 0;
        userAnswers = new Array(10).fill(null);
        
        document.getElementById("quiz-start-screen").style.display = "none";
        document.getElementById("quiz-results-screen").style.display = "none";
        document.getElementById("quiz-active-screen").style.display = "block";
        
        renderQuestion();
        console.log("Quiz iniciado correctamente");
    } catch (error) {
        console.error("Error al iniciar el examen:", error);
        alert("Ocurrió un error al iniciar el examen: " + error.message);
    }
}

function renderQuestion() {
    const qData = selectedQuestions[currentQuestionIndex];
    document.getElementById("quiz-progress").innerText = `Pregunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`;
    document.getElementById("quiz-question-text").innerText = qData.question;
    
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";
    
    qData.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add("selected");
        }
        btn.innerText = opt;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });
    
    // Update nav buttons
    document.getElementById("quiz-prev-btn").disabled = currentQuestionIndex === 0;
    
    const nextBtn = document.getElementById("quiz-next-btn");
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.innerText = "Finalizar y Calificar";
        nextBtn.classList.add("primary-btn");
    } else {
        nextBtn.innerText = "Siguiente";
        nextBtn.classList.remove("primary-btn");
    }
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Por favor selecciona una respuesta antes de continuar.");
        return;
    }
    
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function showResults() {
    let score = 0;
    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correctAnswer) {
            score++;
        }
    });
    
    document.getElementById("quiz-active-screen").style.display = "none";
    document.getElementById("quiz-results-screen").style.display = "block";
    
    const percentage = (score / selectedQuestions.length) * 100;
    const resultTitle = document.getElementById("quiz-result-title");
    const resultText = document.getElementById("quiz-result-text");
    
    if (percentage >= 80) {
        resultTitle.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #28a745; font-size: 4rem; margin-bottom:15px;"></i><br>¡Excelente!';
        resultTitle.style.color = "#28a745";
    } else if (percentage >= 60) {
        resultTitle.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ffc107; font-size: 4rem; margin-bottom:15px;"></i><br>Buen intento';
        resultTitle.style.color = "#ffc107";
    } else {
        resultTitle.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: #dc3545; font-size: 4rem; margin-bottom:15px;"></i><br>Reprobado';
        resultTitle.style.color = "#dc3545";
    }
    
    resultText.innerHTML = `Obtuviste <strong>${score}</strong> respuestas correctas de ${selectedQuestions.length}.<br><br>Calificación: <strong>${percentage}%</strong>`;
}

// Event Listeners initialization
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-quiz-btn");
    const retryBtn = document.getElementById("retry-quiz-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    const prevBtn = document.getElementById("quiz-prev-btn");

    if(startBtn) startBtn.addEventListener("click", initQuiz);
    if(retryBtn) retryBtn.addEventListener("click", () => {
        document.getElementById("quiz-results-screen").style.display = "none";
        document.getElementById("quiz-start-screen").style.display = "block";
    });
    if(nextBtn) nextBtn.addEventListener("click", nextQuestion);
    if(prevBtn) prevBtn.addEventListener("click", prevQuestion);
});

