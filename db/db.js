//iMPORTAMOS MONGOOSE PARA CREAR LA CONEXCION A LA DB DE MONGODB

const mongoose= require('mongoose');


//Conectamos la DB utilizando el metodo connect de mongoose

const mongoURL=("mongodb+srv://lidicedayana:Alaska273004.@cluster0.tdgnhza.mongodb.net/Proyect");

// Funcion para conectarnos a la DB
function connectDB() {
    return new Promise((res, rej) => {
      // Conectar a la base de datos usando la URL proporcioanada
      mongoose
        .connect(mongoURL)
        .then(() => {
          console.log("Conexion a la DB establecida correctamente");
          // Si la conexion es exitosa resolvemos la promesa-
          res();
        })
        .catch((err) => {
          // Si hay un error al conectar, imprimir el error y rechazar la promesa
          console.error("Error al conectar a la DB ", err);
          rej(err);
        });
    });
  }
  //Exportamos la funcion de la conexion a la base de datos para poder utilizarla en el app.js
  module.exports = connectDB;