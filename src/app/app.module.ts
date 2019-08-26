import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassesComponent } from './classes/classes.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    WeddingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
