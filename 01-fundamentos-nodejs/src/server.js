import http from "node:http";

/*
    - HTTP
        - Método HTTP
            - GET: Buscar informações do back-end;
            - POST: Criar um recurso ou informação;
            - PUT: Atualizar um recurso por completo;
            - PATCH: Atualizar uma informação unica ou especifica de um recurso;
            - DELETE: Deletar um recurso do back-end;
        - URL
            - Podem ser unicas e se diferir por método;
            - HTTP + URL
                - GET /user: Buscar usuários;
                - DELETE /user: Apagar usuários;
                - PATCH /user: atualizar informações do usuário;    
*/


const server = http.createServer((req, res) => {
    const { method, url } = req
    if (method === 'GET' && url === '/users') {
        return res.end("Listagem de usuários")  
    }

    if (method === 'POST' && url === '/users') {
        return res.end("Criação de usuários")   
    }
    
    return res.end("Hello World");
});

server.listen(3333);
