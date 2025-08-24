import http from 'http';
import path from 'path';
import url from 'url';
import getPORT from './app.js';
import fs from 'fs/promises';

const PORT = getPORT();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try{
    let filePath; 
    if (req.method === 'GET' || req.method === 'POST') {
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        res.writeHead(404, { 'Content-Type' : 'text/plain' });
        return res.end('Page Not Found!');
      }
      const data = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(data);
    } else {
      throw new Error("Invalid Request!");
    } 
  } catch(err) {
     res.writeHead(500, {'Content-Type': 'text/html'});
     res.end(`${err.message}!`);
  }
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
})