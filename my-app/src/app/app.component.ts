import { Component } from '@angular/core';
import { todo } from "./interfaces/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: Array<todo> = [
    {
      id: 1,
      title: 'learn JS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'learn Angular',
      isCompleted: false,
    }
  ];
  filterList: Array<todo> = this.todoList.slice(0);

  deleteTodoItem(id) {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  completeTodoItem(id) {
    this.todoList.forEach(item => {
      if(item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
    })
  }

  onFormSubmit(todo) {
    const newTodo: todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    };

    this.todoList.push(newTodo);
  }

  filterItem(option) {
    if (option === 'todo') {
      this.todoList = this.filterList.filter( (todo) => {
        return todo.isCompleted === false;
      });
    } else if (option === 'complete') {
      this.todoList = this.filterList.filter((todo) => {
        return todo.isCompleted === true;
      });
    } else {
      this.todoList = this.filterList;
    }
  }
}
