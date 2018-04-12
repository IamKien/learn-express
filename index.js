const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// var requestTime = function(req, res, next) {
//   req.requestTime = new Date();
//   next();
// };

let todoList = [
  { todo: "learn NodeJs", done: false },
  { todo: "Learn ReactJs", done: false }
];
// app.use(requestTime);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/todo", (req, res) => {
  res.send({ data: todoList });
});

app.get("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send("not found");
  } else {
    res.send({ data: todoList[index] });
    console.log(index, length);
  }
});

app.post("/todo", (req, res) => {
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);
  console.log(typeof done);
  if (todo === "") {
    res.send("todo cannont empty");
  } else {
    let newTodo = {
      todo: req.body.todo,
      done: done
    };
    todoList.push(newTodo);
    res.send({ sucess: true, data: newTodo });
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send({ sucess: false, message: "data not found" });
  } else {
    todoList.splice(index, 1);
    res.send({ success: true, data: todoList });
  }
});

app.get("/todo/search/:key", (req, res) => {
  let key = req.params.key;
  var find = todoList.find(word => word.todo.toLowerCase().includes(key));
  if(find){
    res.send( {sucess: true, message: "Found", result: find })
  }else{
    res.send( {success: false, message: "Not Found"})
  }
})

app.get("/todo/update/:id", (req, res) => {
  let index = req.params.key;
  var update = //
  if(find){
    res.send( {sucess: true, message: "Found", result: find })
  }else{
    res.send( {success: false, message: "Not Found"})
  }
})


app.listen(3000, () => console.log("Example app listening on port 3000!"));
