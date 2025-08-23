const posts = [
    {id: 1, name: 'Prakat', age: 69},
    {id: 2, name: 'Prakat1', age: 6},
    {id: 3, name: 'Prakat2', age: 11},
    {id: 4, name: 'Prakat3', age: 44},
    {id: 5, name: 'Prakat4', age: 9},
    {id: 6, name: 'Prakat5', age: 49}
];

const getPost = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = posts.find(post => post.id === id);
            if (data) {
                resolve(data);
            } else {
                reject("Not found!");
            }
        }, 2000);
    })
}

const createPost = (id, name, age) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        let post = {id: id, name: name, age: age};
        posts.push(post);
        resolve(post);
    }, 3000)
    })
}

const printPost = (data) => {
    console.log(`This is a post from ${data.name} od age ${data.age}`);
}

createPost(7, 'Messaage', 22)
    .then((data) => {
        console.log("Post created:", data);
        return getPost(7); 
    })
    .then(printPost)
    .catch((err) => {
        console.log(err);
    });


/*async function run() {
    try {
        await createPost(7, 'Messaage', 22);
        console.log("Post created:", data);
        let data = await getPost(7);
        printPost(data);
    } catch (err) {
        console.log(err);
    }
} 
run();
*/