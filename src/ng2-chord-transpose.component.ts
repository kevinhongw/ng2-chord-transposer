import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { Ng2ChordTransposeService } from './services/ng2-chord-transpose.service';
import { ChordAreaComponent } from './chord-area/chord-area.component';

@Component({
  selector: 'ng2-chord-transpose',
  template: `
  <div *ngIf="showKeyList" class="keys-list-container">
    <span (click)="setKey(key)" *ngFor="let key of keysList" class="keys-list-item">{{key}}</span>
  </div>
  <div *ngIf="showUpDown" class="up-down-container">
    <button (click)="keyUp()">Up</button>
    <button (click)="keyDown()">Down</button>
  </div>
  <chord-area *ngFor='let section of chordSections; let i = index' [chordKey]='currentKey' [chordData]='section.body' [sectionTitle]='section.title'></chord-area>
  `,
  styles: [
    '.keys-list-item { margin: 0 10px; }'
  ]
})
export class Ng2ChordTransposeComponent implements OnInit {
  @Input() chordSections: any;
  @Input() key: string;
  @Input() settings: any;
  @Input() showUpDown: boolean = true;
  @Input() showKeyList: boolean = false;
  currentKey: any;
  keysList: Array<string>;

  constructor(private chordService: Ng2ChordTransposeService) {
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

   setKey(key: string) {
     const newKey = this.chordService.getKeyByName(key);
     this.currentKey = newKey;
   }

  private _changeKeyByValue(keyValue: number) {
    const newKey = this.chordService.getKeyByValue(keyValue);
    this.currentKey = newKey;
  }


  ngOnChanges(changes: any) {
    if (changes['key'] !== undefined) {
      this.setKey(changes['key'].currentValue);
    }
  }

  ngOnInit() {
    this.currentKey = this.chordService.getKeyByName(this.key);
    this.keysList = this.chordService.getKeysList();
  }

}
