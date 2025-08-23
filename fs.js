import fs from 'fs/promises';

const readTheFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch(err) {
        console.log(err);
    }
};

const writeTheFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'I am testyyyyyyyyyyyyy!');
    } catch(err) {
        console.log(err);
    }
};

const appendTheFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nAppended!');
    } catch(err) {
        console.log(err);
    }
};

const run =  async () => {
    await writeTheFile();
    await appendTheFile();
    await readTheFile();
}

run();

