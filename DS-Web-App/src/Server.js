import express from 'express';
import mysql from 'mysql';
import {renderToString} from 'react-dom/server';
import App from './App';

const port = 3000;
const server = express();

server.listen(port);
console.log(`Serving at http://localhost:${port}`);