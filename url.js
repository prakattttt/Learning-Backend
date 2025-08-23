import url from 'url';

const urlString = 'https://www.google.com/search?q=hello';

const urlObj = new URL(urlString);
console.log(urlObj);

console.log(url.format(urlObj));

console.log(import.meta.url);
console.log(url.fileURLToPath(import.meta.url));

const urlParams = urlObj.searchParams;
console.log(urlParams.get('q'));


/*const urlParams = new URLSearchParams(urlObj.search);
console.log(urlParams.get('q'));
urlParams.append('count', '69');
console.log(urlParams);
urlParams.delete('count', '69');
console.log(urlParams);
*/


