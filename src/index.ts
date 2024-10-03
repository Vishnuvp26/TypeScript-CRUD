import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import studentRoute from './routes/studentsRoute';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('dist/public'));

app.use('/', studentRoute);

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('Server started');
});