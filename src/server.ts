import express from "express";
import cors from "cors";
import { router } from "./infra/http/routes/index.routes";
import { initializeDb } from "./core/repositories/databases/sqlite";

const app = express();
const PORT = 4002;

app.use(express.json());
app.use(cors());   
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(router) 

app.listen(PORT, async ()=> {
    await initializeDb();
    console.log(`Server running on port: ${PORT}`);
});