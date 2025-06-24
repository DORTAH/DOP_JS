import { getListTodos, getItem } from "../models/todos.js";

export function infoPage(req, res) {
  res.render("info", {
    title: "Информация",
  });
}

export function mainPage(req, res) {
  let list = getListTodos();
  
  if (req.query.search) {
    const q = req.query.search.toLowerCase()
    list = list.filter((el) => {return el.title.toLowerCase().includes(q)})
  }

  res.render("main", {
    req: req,
    todos: list,
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
