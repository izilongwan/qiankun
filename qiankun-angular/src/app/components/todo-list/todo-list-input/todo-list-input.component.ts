import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: './todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.scss']
})
export class TodoListInputComponent implements OnInit {

  @Output() todoListInputEventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(el: HTMLInputElement) {
    this.todoListInputEventEmitter.emit(el.value);
    el.value = ''
  }
}
