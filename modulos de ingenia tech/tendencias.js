// ================================
// QUIZ DE TECNOLOGÍA
// ================================

function responder(correcta){

    const resultado =
    document.getElementById("resultadoQuiz");

    if(correcta){

        resultado.innerHTML =
        "✅ Correcto. La Inteligencia Artificial es una de las tecnologías más influyentes actualmente.";

        resultado.style.color = "#00ff99";

    }else{

        resultado.innerHTML =
        "❌ Incorrecto. Inténtalo nuevamente.";

        resultado.style.color = "#ff4d4d";

    }
}


// ================================
// BOTÓN VOLVER ARRIBA
// ================================

const btnTop =
document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }

});

function subirArriba(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


// ================================
// EFECTO TARJETAS
// ================================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});