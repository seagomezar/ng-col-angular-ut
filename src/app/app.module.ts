import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConferencesService } from './conferences.service';
import { NamesService } from './names.service';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ConferencesService, NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }