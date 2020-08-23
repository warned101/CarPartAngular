import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MyApiService } from "./services/myapi.service";
import { FormsModule } from '@angular/forms';
import { ViewCarpartsComponent } from './view-carparts/view-carparts.component';
import { AddCarpartComponent } from './add-carpart/add-carpart.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewCarpartsComponent,
    AddCarpartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
