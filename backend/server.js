import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {MarvelService} from './services/marvelService.js'
import { ToolingService} from './services/toolService.js'


// Initialize express
const app = express();
dotenv.config();
const marvelService = MarvelService();
const toolService = ToolingService()


// Set __directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/api/marvel/characters', async (req, res) => {
    res.json(await marvelService.getCharacters());
})

app.post('/api/marvel/character/profile', async (req, res) => {
    res.json(await marvelService.getCharacter(req.body.id));
})

app.get('*', function(req, res){
    res.json({status:404, message:toolService.randomQuoteAboutBeingLost()});
  });

// Set port to listen on
const port = 3000
app.listen(port, () =>{
    console.log(`Listening on port: ${chalk.bgGray(chalk.italic(chalk.blueBright(port)))}`)
})