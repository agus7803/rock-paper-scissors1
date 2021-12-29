import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RoundComponent} from "./round/round.component";
import {Round2Component} from "./round/round2.component";
import {Round3Component} from "./round/round3.component";
import {app_routing} from "./app-router";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoundComponent,
    Round2Component,
    Round3Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
