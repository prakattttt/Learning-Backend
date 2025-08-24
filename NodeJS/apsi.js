const url = 'https://randomuser.me/api/';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
}

getData();
