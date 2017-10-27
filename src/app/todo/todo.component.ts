import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList:Array<object>;
  constructor(private todoSvc: TodoService) {
    this.todoList = todoSvc.getListTodo()
  }

  ngOnInit() {
  }

  addTask(todoForm: NgForm): void{
    this.todoList.push(todoForm.value);
    todoForm.resetForm();
  }

}
