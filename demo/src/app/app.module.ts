import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2ChordTransposeModule } from 'ng2-chord-transpose';
// import { Ng2ChordTransposeService } from 'ng2-chord-transpose';
// import { ChordAreaComponent } from 'ng2-chord-transpose';
// import { ChordLineComponent } from 'ng2-chord-transpose';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2ChordTransposeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
