import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { SecondComponent } from './second.component';
import { TodoListInputComponent } from 'src/app/components/todo-list/todo-list-input/todo-list-input.component';
import { TodoListItemComponent } from 'src/app/components/todo-list/todo-list-item/todo-list-item.component';
import { SecondRoutingModule } from './second-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  declarations: [
    SecondComponent,
    TodoListComponent,
    TodoListInputComponent,
    TodoListItemComponent,
  ]
})
export class SecondModule { }
