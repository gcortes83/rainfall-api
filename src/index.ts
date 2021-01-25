import express from 'express';
import bodyParser from "body-parser";
import {Rainfall} from "./db/models/rainfall.model";
import {connect} from "./db/db";
import cors from 'cors'

connect();

const app = express();

const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to rainfall api." });
});

const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
};

app.use(cors(options));

app.get('/rainfalls/', async (req,res) => {
    const rainfalls = await Rainfall.find({
        where: {
            year: 2020
        }
    });
    if (rainfalls){
        const response: any[] = [];
        rainfalls.forEach(item => {
            response.push( { [item.month]: item.rainfall})
        })
        res.json(response);
    } else {
        res.status(404).send({message: "Rainfalls stats not found"})
    }
});

app.post('/rainfalls/', async (req,res) => {
    const rainfall = new Rainfall();
    rainfall.year = req.body.year;
    rainfall.month = req.body.month;
    rainfall.rainfall = req.body.rainfall
    await rainfall.save();
    res.send(rainfall);
});

app.listen(port, () => console.log(`Running on port ${port}`));