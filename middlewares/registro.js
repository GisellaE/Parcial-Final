const fs = require('fs');


function LogsPeticiones(peticiones){

    const date = new Date();

    const formattedDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " " +date.getHours()+":"+date.getMinutes();

    let LogCompleto= formattedDate +" " + peticiones

    const existeArchivo = fs.existsSync('registros.txt');

    if (!existeArchivo) {
        fs.writeFile('registros.txt', LogCompleto , (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('El archivo se creó correctamente');
            }
        });

    }else{
        fs.appendFile('registros.txt','\n' + LogCompleto, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('El contenido se agregó correctamente');
            }
        });
    }
    
}


module.exports = { LogsPeticiones }