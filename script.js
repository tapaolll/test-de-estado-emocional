document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        "¿Te has sentido triste o sin ganas de hacer cosas últimamente?",
        "¿Tienes problemas para dormir o duermes demasiado?",
        "¿Sientes que no disfrutas cosas que antes te gustaban?",
        "¿Te sientes ansioso o preocupado sin razón aparente?",
        "¿Tienes dificultad para concentrarte en tus actividades diarias?",
        "¿Te has sentido más cansado de lo normal sin motivo?",
        "¿Has perdido interés en hablar con amigos o familiares?",
        "¿Sientes que no tienes energía para afrontar el día?",
        "¿Te irritas fácilmente sin razón aparente?",
        "¿Sientes que no eres suficiente o que no vales la pena?",
        "¿Últimamente has llorado sin un motivo claro?",
        "¿Tienes pensamientos negativos constantes sobre ti mismo o tu vida?",
        "¿Te ha costado encontrar motivación para hacer actividades diarias?",
        "¿Sientes que nada te emociona o motiva?",
        "¿Has pensado que las cosas no van a mejorar en el futuro?"
    ];

    const questionsContainer = document.getElementById("questions");

    questions.forEach((question, index) => {
        let questionHTML = `
            <div class="question">
                <p>${index + 1}. ${question}</p>
                <label><input type="radio" name="q${index + 1}" value="3"> Muy seguido</label>
                <label><input type="radio" name="q${index + 1}" value="2"> A veces</label>
                <label><input type="radio" name="q${index + 1}" value="1"> Casi nunca</label>
            </div>
        `;
        questionsContainer.innerHTML += questionHTML;
    });
});

function calcularResultado() {
    let total = 0;
    let respuestas = document.querySelectorAll('input[type="radio"]:checked');

    if (respuestas.length < 15) {
        alert("Por favor, responde todas las preguntas.");
        return;
    }

    respuestas.forEach(respuesta => {
        total += parseInt(respuesta.value);
    });

    let porcentaje = 100 - ((total - 15) / (45 - 15)) * 100;
    porcentaje = Math.round(porcentaje);

    let progressBar = document.getElementById("progress");
    let resultadoTexto = document.getElementById("resultado");
    let mensajeTexto = document.getElementById("mensaje");

    progressBar.style.width = porcentaje + "%";
    progressBar.style.backgroundColor = porcentaje >= 70 ? "green" : porcentaje >= 40 ? "orange" : "red";

    resultadoTexto.innerHTML = `Tu estado emocional es del ${porcentaje}%`;

    let mensaje = "";
    if (porcentaje >= 80) {
        mensaje = "¡Estás en un gran estado emocional! Sigue haciendo lo que te hace feliz.";
    } else if (porcentaje >= 60) {
        mensaje = "Parece que estás bien, pero no olvides cuidar tu bienestar emocional.";
    } else if (porcentaje >= 40) {
        mensaje = "Podrías estar pasando por un momento difícil, busca formas de relajarte.";
    } else {
        mensaje = "Es importante que busques apoyo. Hablar con alguien puede ayudarte mucho.";
    }

    mensajeTexto.innerHTML = mensaje;
}
