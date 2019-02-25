import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InputVModule } from 'input-v';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputVModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
