import express from 'express';
import { database } from '../database.js';

const router = express.Router();

router.get('/', (req, res) => {
    const lim = parseInt(req.query.limit);
    if(!isNaN(lim) && lim > 0) {
        return res.status(200).json(database.slice(0, lim));
    }
    res.json(database);
})

router.get('/name/:name', (req, res) => {
    let user = req.params.name.toLowerCase();
    const found = database.filter(u => u.name.toLowerCase() === user);
    if(found.length > 0) {
        return res.status(200).json(found);
    }
    res.status(404).send('Not Found!');
})

router.get('/id/:id', (req, res) => {
    let uid = parseInt(req.params.id);
    const found = database.find(u => u.id === uid);
    if(found) {
        return res.status(200).json(found);
    }
    res.status(404).send('Not Found!');
})

export default router;;