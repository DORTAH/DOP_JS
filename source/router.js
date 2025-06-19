import { Router } from "express";
import { detailPage, mainPage } from "./controllers/todos.js";

const router = Router();
router.get("/:id", detailPage);
router.get("/", mainPage)

export default router