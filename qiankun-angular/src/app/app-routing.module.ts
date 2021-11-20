import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { FirstComponent } from './pages/first/first.component'
import { SecondComponent } from './pages/second/second.component';
import { SecondIdComponent } from './pages/second-id/second-id.component'

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'second/:id', component: SecondIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/angular' : '/' }
  ]
})
export class AppRoutingModule { }
