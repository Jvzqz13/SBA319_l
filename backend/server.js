import './localEnv.js';
import { conn } from './db/conn.js'; conn();
import express from 'express'; 
import morgan from 'morgan';
//import cors later

import userRouter from './routes/users.js'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRouter);





app.get('/', (req, res) => {
    res.send('Welcome to the API')
})



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
