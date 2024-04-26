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
const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req
    if (method === 'GET' && url === '/users') {
        return res
        .setHeader("Content-type", "application/json")
        .writeHead(201)
        .end(JSON.stringify(users))  
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            nome: "Jhon Doe",
            email: "jhondoe@gmail.com"
        })
        return res.writeHead(200).end   
    }

    return res.writeHead(404).end();
});

server.listen(3333);
