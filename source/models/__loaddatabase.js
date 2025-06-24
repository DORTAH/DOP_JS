import { join } from "path";
import { readFileSync } from "fs";

import { currentDir } from "../utility.js";

const dataFileName = join(currentDir, "data", "todos.json");

const dataFile = readFileSync(dataFileName, "utf-8");
const dataBase = JSON.parse(dataFile);

export function saveDatabase() {
    const s = JSON.stringify(dataBase)
}

export { dataBase }