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
        .end(JSON.stringify(users))  
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            nome: "Jhon Doe",
            email: "jhondoe@gmail.com"
        })
        return res.end("Usuário criado!")   
    }

    return res.end("Hello World");
});

server.listen(3333);
