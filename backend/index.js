import express from 'express'
import { configDotenv } from 'dotenv';
import { connectDB } from './db/connectDB';
import authRouter from './routes/auth.route';
configDotenv()
const app = express();
const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send("i love ayaka")
});
app.use('/api/auth', authRouter);
app.listen(PORT, () => {
    connectDB()
    console.log('love ayaka on 3000');
});
