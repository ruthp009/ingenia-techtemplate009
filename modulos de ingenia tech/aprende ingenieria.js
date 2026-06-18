
/* =====================================
   DATOS CURIOSOS
===================================== */

const datos = [

"Git fue creado por Linus Torvalds, el creador de Linux.",

"JavaScript fue desarrollado en solo 10 días.",

"Python es uno de los lenguajes más utilizados en Inteligencia Artificial.",

"La nube está formada por miles de servidores físicos conectados.",

"GitHub almacena millones de proyectos de programación.",

"El primer sitio web del mundo todavía sigue activo.",

"Las bases de datos modernas pueden procesar millones de registros en segundos.",

"HTML no es un lenguaje de programación; es un lenguaje de marcado."

];

function nuevoDato(){

    let numero =
    Math.floor(Math.random() * datos.length);

    document.getElementById("datoTexto")
    .innerHTML = datos[numero];

}

