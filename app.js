const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res)=>{
if (req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <form method="POST">
    <input type="text" name="num1"></input>
    <br>
    <br>
    <input type="text" name="num2"></input>
    <br>
    <br>
    <input type="text" name="num3"></input>
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
        const num1 = parseFloat(parseBody.num1);
        const num2 = parseFloat(parseBody.num2);
        const num3 = parseFloat(parseBody.num3);

        const sum = num1 + num2;
        const respuesta = sum * num3;
        
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