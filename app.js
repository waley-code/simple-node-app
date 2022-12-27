const http = require('http');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 4000;
const server = http.createServer((req, resp)=>{
    if(req.url === '/'){
        render(resp, 'index.html');
    }else if(req.url === '/about'){
        render(resp, 'about.html');
    }else if(req.url === '/contact'){
        render(resp, 'contact.html');
    }else {
        resp.writeHead(404, 'Content-type', 'text/html');
        resp.end('<h1> File not found</h1>')
    }
});

server.listen(port, ()=>console.log(`http://localhost:${port}`))

const render = (resp, file) => {
    fs.readFile(`${dir}`+file, (err, data)=>{
        if (err){
            resp.writeHead(404, 'Content-type', 'text/html');
            resp.end('<h1> File not found </h1>')
        }
        resp.writeHead(200, 'Content-type', 'text/html');
        return resp.end(data);
    });
};