import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseNavComponent } from './components/base-nav/base-nav.component';
import { FirstModule } from './pages/first/first.module';
import { SecondModule } from './pages/second/second.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseNavComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    SecondModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
