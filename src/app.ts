import express from 'express';
import { router } from './routes/routes';

const app = express();
app.use(express.json());

import './server';

app.use(router);

export { app };