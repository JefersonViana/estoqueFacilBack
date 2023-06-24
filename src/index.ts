import express from "express";
import router from "./routes/index.routes";
import './database/mongoConfig';

const app = express()
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log('Application started on port 3003!');
});