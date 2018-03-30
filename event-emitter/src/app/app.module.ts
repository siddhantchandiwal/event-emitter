import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SecondChildComponentComponent } from './second-child-component/second-child-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    SecondChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
