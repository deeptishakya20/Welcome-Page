import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';



@NgModule({
    declarations:[
        WelcomeComponent
    ],
    imports:[
     BrowserModule
    ],
    exports:[
        WelcomeComponent
    ]
})
export class WelcomeModule{

}