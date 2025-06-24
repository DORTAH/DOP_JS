import { getListTodos, getItem } from "../models/todos.js";

export function infoPage(req, res) {
  res.render("info", {
    title: "Информация",
  });
}

export function mainPage(req, res) {
  res.render("main", {
    todos: getListTodos(),
    title: "Главная",
    path: req.baseUrl,
  });
}

export function detailPage(req, res) {
  const toDoObject = getItem(req.params.id);

  if (!toDoObject) {
    errorPage(req, res);
    return;
  }

  res.render("detail", {
    title: toDoObject.title,
    item: toDoObject,
  });
}

function errorPage(req, res) {
  res.status(404);
  res.render("error", {
    title: "Ошибка",
  });
}
