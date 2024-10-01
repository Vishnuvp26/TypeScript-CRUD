import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('Server started');
});