import { Router } from "express";

import { detailPage, mainPage, infoPage } from "./controllers/todos.js";
const routerMain = Router();
const routerTodos = Router();

routerTodos.get("/:id", detailPage);
routerTodos.get("/", mainPage);

routerMain.get("/", infoPage);
routerMain.use("/todos", routerTodos);

export default routerMain
