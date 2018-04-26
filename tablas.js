const fs = require('fs');

let base = 0;

let datos = '';

for (let j = 1; j <= 10; j++) {

    base = j;

    datos = '';

    for (let i = 1; i <= 10; i++) {
        datos += `${base} * ${i} = ${base*i}\n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
    
        if (err) throw err;
    
        console.log(`El archivo tabla-${base}.txt ha sido creado`);
    });
}

