const express = require("express");
const path = require("path");
const conexion = require("./database/conexion");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static(__dirname));

// Página principal (Login)
app.get("/", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "login de registro.html",
            "ingresar a ingenia tech login.html"
        )
    );
});

// REGISTRO
app.post("/registrar", (req, res) => {

    const { nombre, correo, contraseña } = req.body;

    const sql = `
        INSERT INTO usuarios(nombre, correo, contraseña)
        VALUES (?, ?, ?)
    `;

    conexion.query(
        sql,
        [nombre, correo, contraseña],
        (error, resultado) => {

            if(error){
                console.log(error);

                return res.json({
                    exito:false,
                    mensaje:"Error al registrar usuario"
                });
            }

            res.json({
                exito:true,
                mensaje:"Usuario registrado correctamente"
            });

        }
    );

});

// LOGIN
app.post("/login", (req, res) => {

    const { correo, contraseña } = req.body;

    const sql = `
        SELECT * FROM usuarios
        WHERE correo = ? AND contraseña = ?
    `;

    conexion.query(
        sql,
        [correo, contraseña],
        (error, resultados) => {

            if(error){
                console.log(error);

                return res.json({
                    exito:false,
                    mensaje:"Error del servidor"
                });
            }

            if(resultados.length > 0){

                return res.json({
                    exito:true,
                    mensaje:"Login correcto"
                });

            }else{

                return res.json({
                    exito:false,
                    mensaje:"Correo o contraseña incorrectos"
                });

            }

        }
    );

});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});