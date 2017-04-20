import { Component, OnInit, Input } from '@angular/core';
import { Ng2ChordTransposeService } from './ng2-chord-transpose.service';
import { ChordAreaComponent } from './chord-area/chord-area.component';

@Component({
  selector: 'ng2-chord-transpose',
  templateUrl: './ng2-chord-transpose.component.html',
  styleUrls: ['./ng2-chord-transpose.component.css'],
  providers: [ Ng2ChordTransposeService ]
})
export class Ng2ChordTransposeComponent implements OnInit {
  @Input() chordSections: any;
  @Input() key: string;
  @Input() settings: any;
  currentKey: any;

  constructor(public chordService: Ng2ChordTransposeService) {
  }

  keyUp() {
    let newKeyValue = this.currentKey.value + 1;
    if (newKeyValue > 11) {
      newKeyValue = 0;
    }
    this._changeKeyByValue(newKeyValue);
  }

  keyDown() {
    let newKeyValue = this.currentKey.value - 1;
    if (newKeyValue < 0) {
      newKeyValue = 11;
    }
    this._changeKeyByValue(newKeyValue);
   }

  private _changeKeyByValue(keyValue) {
    const newKey = this.chordService.getKeyByValue(keyValue);
    this.currentKey = newKey;
  }

  ngOnInit() {
    this.currentKey = this.chordService.getKeyByName(this.key);
  }

}
