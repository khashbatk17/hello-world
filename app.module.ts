import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsMainComponent } from './news-main/news-main.component';
import { NewsSectionOneComponent } from './news-section-one/news-section-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsMainComponent,
    NewsSectionOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
