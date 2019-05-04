import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent],

  imports: [
    BrowserModule,
    MainModule,
    WelcomeModule
  ]

  
 
})
export class AppModule { }
