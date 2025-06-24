import { dataBase } from "./__loaddatabase.js";

const todos = dataBase.todos;

export function getListTodos() {
    return todos
}

export function getItem(id) {
    return todos.find((item) => item._id === id)
}