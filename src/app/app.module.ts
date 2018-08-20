import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConferencesService } from './conferences.service';
import { NamesService } from './names.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ConferencesService, NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }