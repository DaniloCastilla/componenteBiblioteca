import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { TestComponent } from './test/test.component';
import { MaterialesService } from './materiales/materiales.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MaterialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
