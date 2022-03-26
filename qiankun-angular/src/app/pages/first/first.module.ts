import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from 'src/app/components/test/test.component';
import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  declarations: [
    FirstComponent,
    TestComponent,
  ]
})
export class FirstModule { }
