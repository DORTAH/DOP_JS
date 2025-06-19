import { getListTodos, getItem } from "../models/todos.js"

export function mainPage(req, res) {
    res.render ("main", {
        todos: getListTodos(),
        title: "Главная"
    })
}

export function detailPage(req, res) {
    const toDoObject = getItem(req.params.id);

    if(!toDoObject) {
        errorPage(req, res);
        return;
    }

    res.render("detail", {
        title: toDoObject.title,
        item: toDoObject
    })
}

function errorPage(req, res) {
    res.status(404);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Окак</title>
        </head>
        <body>
            <h1><b>Мегаласт не вышел</b></h1>
        </body>
        </html>
        `)
}