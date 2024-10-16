import express from 'express';
import router from './routes.js';
import handllebarsInit from './config/handlebarsInit.js';

const app = express();
handllebarsInit(app);

app.use('/static', express.static('src/public'));
app.use(router);

app.listen(3000, () => console.log('Server is listening at http://localhost:3000'));