const http = require('http');

const servidor = http.createServer((requisao, resposta) => {
resposta.setHeader('content-Type', 'text/html');
if (requisao.url === '/'){
    resposta.statusCode = 200;
    resposta.end('<h1>Hello World!</h1>');
}
else if (requisao.url === '/alunos'){
    resposta.statusCode = 200;
    resposta.end('<ul><li> diogo </li> <li> lorran </li></ul>');
}
else {
    resposta.statusCode = 404;
    resposta.end('404')

}
});

servidor.listen(3000, () => console.log('Servidor online'));