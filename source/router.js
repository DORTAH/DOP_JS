import { Router } from "express";
import methodOverride from "method-override";
import { writeFile } from "fs/promises";

import { detailPage, mainPage, infoPage } from "./controllers/todos.js";
import { dataBase } from "./models/__loaddatabase.js";
const routerMain = Router();
const routerTodos = Router();

routerTodos.get("/:id", detailPage);
routerTodos.get("/", mainPage);

routerMain.get("/", infoPage);
routerMain.use("/todos", routerTodos);



export default routerMain
