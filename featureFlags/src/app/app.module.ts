import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThirdFeatureComponent} from './third-feature/third-feature.component';
import {FirstFeatureComponent} from './first-feature/first-feature.component';
import {SecondFeatureComponent} from './second-feature/second-feature.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ThirdFeatureComponent,
    FirstFeatureComponent,
    SecondFeatureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
