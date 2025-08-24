import crypto from 'crypto';

const hash = crypto.createHash('sha256'); 
hash.update('Hello World');              
const digest = hash.digest('hex');       
console.log(digest);  

/*
const hash = crypto.createHash('sha256').update('Hello World').digest('hex');
console.log(hash);
*/

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);
