const fs = require('fs');

const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    

    if (!Number(base)) {
        console.log(`El valor introducido: "${base}" no es un número`.red);
        return;
    }

    console.log('=============='.cyan);
    console.log(`Tabla del ${base} creada`.cyan);
    console.log('=============='.cyan);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise ((resolve,reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`.red);
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
            
            if 
                (err) reject(err);
            else 
                resolve(`tabla-${base}.txt`);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}