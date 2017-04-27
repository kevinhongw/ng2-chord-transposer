import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './ng2-chord-transpose.component';

import { Ng2ChordTransposeService } from './services/ng2-chord-transpose.service';
import { Ng2ChordTransposeComponent } from './ng2-chord-transpose.component';
import { ChordAreaComponent } from './chord-area/chord-area.component';
import { ChordLineComponent } from './chord-line/chord-line.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ng2ChordTransposeComponent,
    ChordAreaComponent,
    ChordLineComponent
  ],
  providers: [
    Ng2ChordTransposeService
  ],
  exports: [
    Ng2ChordTransposeComponent,
    ChordAreaComponent,
    ChordLineComponent
  ]
})
export class Ng2ChordTransposeModule { }
