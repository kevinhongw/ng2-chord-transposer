import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2ChordTransposeService } from './ng2-chord-transpose/ng2-chord-transpose.service';

import { AppComponent } from './app.component';
import { Ng2ChordTransposeComponent } from './ng2-chord-transpose/ng2-chord-transpose.component';
import { ChordAreaComponent } from './ng2-chord-transpose/chord-area/chord-area.component';
import { ChordLineComponent } from './ng2-chord-transpose/chord-line/chord-line.component';



@NgModule({
  declarations: [
    AppComponent,
    Ng2ChordTransposeComponent,
    ChordAreaComponent,
    ChordLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
