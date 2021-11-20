import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  msg = 'todo-list'

  oArrTodoListData: TodoListDataProps[] = []

  constructor() { }

  ngOnInit() {
  }

  todoListInputEventEmitter(text: string) {
    this.oArrTodoListData.push({
      text,
      id: Date.now(),
    })
  }
}

export interface TodoListDataProps {
  id: number;
  text: string;
}
