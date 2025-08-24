import path from 'path';
import url from 'url';

const filePath = '/dir1/dir2/test.txt';
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.basename(__filename));
console.log(__dirname);
console.log(path.join(__dirname, 'app.js'));
console.log(path.resolve('app.js'));