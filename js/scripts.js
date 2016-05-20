angular.module("todoApp", []) // app created
.controller("TodoListController", function($scope) { // controller created
  var todoList = this;
  todoList.todoItems = [
    { name: "Get up", done: false }, // place holder set to be no done
    { name: "Go to school", done: false }, // place holder set to be no done
    { name: "Go home", done: false }, // place holder set to be no done
    { name: "Do homework and sleep", done: false } // place holder set to be no done
    
  ]

  todoList.addTodo = function() { // add frunction created
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };

  todoList.remove = function() { // remove funtion created
    var oldTodos = todoList.todoItems; 
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };

  todoList.remaining = function() { // remaining task funtion created
    var notCompletedCount = 0; // start at 0
    angular.forEach(todoList.todoItems, function(todo) { // each checked goes up
      notCompletedCount += todo.done ? 0 : 1; // make it count backwards
    })

    return notCompletedCount
  }

});