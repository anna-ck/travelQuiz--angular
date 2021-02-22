import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';
import { ProgressBarComponent } from './questions/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    FooterComponent,
    QuestionsComponent,
    ResultComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
