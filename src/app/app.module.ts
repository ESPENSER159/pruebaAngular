import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecargaComponent } from './recarga/recarga.component';
import { RecargaService } from './recarga.service';

@NgModule({
  declarations: [
    AppComponent,
    RecargaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecargaService],
  bootstrap: [AppComponent]
})
export class AppModule { }