import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from 'src/app/components/test/test.component';
import { DevUIModule } from 'ng-devui';

import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';
import { TplLoadingComponent } from 'src/app/components/tpl-loading/tpl-loading.component';
import { Tpl2LoadingComponent } from 'src/app/components/tpl2-loading/tpl2-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
    DevUIModule
  ],
  declarations: [
    FirstComponent,
    TestComponent,
    TplLoadingComponent,
    Tpl2LoadingComponent
  ]
})
export class FirstModule { }
