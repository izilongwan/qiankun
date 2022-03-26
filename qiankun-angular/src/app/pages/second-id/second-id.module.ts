import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondIdComponent } from './second-id.component';
import { SecondIdRoutingModule } from './second-id-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecondIdRoutingModule
  ],
  declarations: [SecondIdComponent]
})
export class SecondIdModule { }
