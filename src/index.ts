import express from "express";
import cors from 'cors';
import router from "./routes/index.routes";
import './database/mongoConfig';

const corsOptions = {
  origin: 'http://localhost:3000'
};

const app = express()
app.use(express.json())
app.use(cors(corsOptions))
app.use(router)

app.listen(process.env.PORT, () => {
  console.log('Application started on port 3003!');
});