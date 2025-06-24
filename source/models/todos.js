import { dataBase } from "./__loaddatabase.js";

const todos = dataBase.todos;

export function getListTodos() {
    return todos
}

export function getItem(id) {
    return todos.find((item) => item._id === id)
}

export function addItem(todo) {
    todo._id = getObjectID();
    todos.push(todo);
    saveDatabase()
}

function getItemIndex(id) {
    return todos.findIndex((el) => el._id === id)
}

export function setItem(id) {
    const index = getItemIndex(id);
    if (index === -1) return;

    todos[index].done = true;
    saveDatabase();
}