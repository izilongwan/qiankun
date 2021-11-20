import { Component, Input, OnInit } from '@angular/core';
import { TodoListDataProps } from '../todo-list.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() itemData!: TodoListDataProps

  constructor() { }

  ngOnInit() {
  }

}
