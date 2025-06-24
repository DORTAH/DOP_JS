import express, { urlencoded } from "express";
import { config } from "dotenv";

import "./source/models/__loaddatabase.js";
import router from "./source/router.js";

config();

const port = process.env.PORT || 8000;

const app = express();
// здесь подключили обработку POST-параметров
app.use(
  urlencoded({ extended: true })
);

app.locals.appTitle = process.env.APPTITLE || "Express";
app.set("view engine", "ejs");
app.set("views", "./source/templates");

app.use("/", router);

app.listen(port);
