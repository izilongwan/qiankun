import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from 'src/app/components/test/test.component';
import { FirstComponent } from './first.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FirstComponent,
    TestComponent,
  ]
})
export class FirstModule { }
