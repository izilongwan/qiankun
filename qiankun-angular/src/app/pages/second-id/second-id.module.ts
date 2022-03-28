import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondIdComponent } from './second-id.component';
import { SecondIdRoutingModule } from './second-id-routing.module';
import {DevUIModule} from 'ng-devui'

@NgModule({
  imports: [
    CommonModule,
    SecondIdRoutingModule,
    DevUIModule
  ],
  declarations: [SecondIdComponent]
})
export class SecondIdModule { }
