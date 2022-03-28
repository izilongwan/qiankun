import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { TodoListInputComponent } from 'src/app/components/todo-list/todo-list-input/todo-list-input.component';
import { TodoListItemComponent } from 'src/app/components/todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
    DevUIModule
  ],
  declarations: [
    SecondComponent,
    TodoListComponent,
    TodoListInputComponent,
    TodoListItemComponent,
  ]
})
export class SecondModule { }
