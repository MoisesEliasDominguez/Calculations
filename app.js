const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res)=>{
if (req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <form method="POST">
    <input type="text" name="Numero1"></input>
    <br>
    <br>
    <input type="text" name="Numero2"></input>
    <br>
    <br>
    <input type="text" name="Numero3"></input>
    <br>
    <br>
    <button type="submit">Calcular</button>
    </form>`);
}
else if (req.method === 'POST'){
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk.toString(); 
    });

    req.on('end', ()=>{
        const parseBody = querystring.parse(body);
        const Numero1 = parseFloat(parseBody.Numero1);
        const Numero2 = parseFloat(parseBody.Numero2);
        const Numero3 = parseFloat(parseBody.Numero3);

        const sum = Numero1 + Numero2;
        const respuesta = sum * Numero3;
        
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            R1 = "El resultado de la suma de Numero1 y Numero2 es: ${sum}"
            <br>
            R2 = "El resultado de la multiplicacion de la suma anterior por Numero3 es: ${respuesta}"
         `);
    });
   }    
});

server.listen(5005);