import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name:"Prakat"},
    {id: 2, name:"Takarp"},
    {id: 3, name:"Kartap"},
    {id: 4, name:"Rapakt"},
    {id: 5, name:"Katarp"}
];

const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
}

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

const createUserHandler = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', () => {
        let newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

const getUserByIdHandler = (req, res) => {
    let id = req.url.split('/')[3];
    let user = users.find((user) => user.id == parseInt(id));
    if(user) {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Id Not Found!'}));
        res.end();
    }
}

const notFoundHandler = (req, res) => {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message: 'Page Not Found!'}));
    res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method == 'GET') {
                getUserHandler(req, res);
            } else if (req.url.match(/\/api\/users\/[0-9]+/) && req.method == 'GET') {
                getUserByIdHandler(req, res);
            } else if(req.url === '/api/users' && req.method == 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        })
    })
});

server.listen(PORT, ()=> {
    console.log(`Server started at port ${PORT}.`);
});