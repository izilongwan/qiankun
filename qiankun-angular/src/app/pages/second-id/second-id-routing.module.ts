import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondIdComponent } from './second-id.component';

const routes: Routes = [{ path: '', component: SecondIdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondIdRoutingModule { }
