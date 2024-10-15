import express from 'express';
import router from './routes.js';

const app = express();

app.use(router)

app.listen(3000, () => console.log('Server is listening at http://localhost:3000'));