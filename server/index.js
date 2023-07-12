import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });



app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT);
console.log(`Server on port ${PORT}`);
