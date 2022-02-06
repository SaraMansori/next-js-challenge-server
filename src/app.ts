import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import './db/index';

const app = express();
app.set('PORT', config.PORT || 5005);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allRoutes = require("./routes");
app.use("/api", allRoutes);

export default app;
