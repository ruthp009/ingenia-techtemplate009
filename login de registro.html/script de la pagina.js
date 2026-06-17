// CAMBIAR A REGISTRO
function mostrarRegistro() {
    document.getElementById("container")
    .classList.add("active");
}

// VOLVER A LOGIN
function mostrarLogin() {
    document.getElementById("container")
    .classList.remove("active");
}

// MOSTRAR U OCULTAR CONTRASEÑA
function togglePassword(id) {

    const input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }

}

// REGISTRAR USUARIO
async function registrarUsuario() {

    const nombre =
    document.getElementById("nombre").value;

    const correo =
    document.getElementById("correo").value;

    const contraseña =
    document.getElementById("registerPass").value;

    if(!nombre || !correo || !contraseña){
        alert("Complete todos los campos");
        return;
    }

    const respuesta = await fetch("/registrar", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            nombre,
            correo,
            contraseña
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

}

// LOGIN
async function iniciarSesion() {

    const correo =
    document.getElementById("loginCorreo").value;

    const contraseña =
    document.getElementById("loginPass").value;

    const respuesta = await fetch("/login", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            correo,
            contraseña
        })

    });

    const datos = await respuesta.json();

    if(datos.exito){

        window.location.href =
        "/login de registro.html/pelotita saltarina.html";

    }else{

        alert(datos.mensaje);

    }

}