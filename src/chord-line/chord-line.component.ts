import { Component, OnInit, Input } from '@angular/core';

/* PLEASE BE EXTRA CAREFUL WITH THE PRE TAG, EVERY SPACE AND LINE COUNTS!!!! */
@Component({
  selector: 'chord-line',
  template:
  `<span class='chord-line'>` +
    `<template [ngIf]='lineMetaData.isChord'>` +
      `<span *ngFor='let piece of lineMetaData.lineData; let i = index'[class.chord-area__chord]='!piece.isWhiteSpc' class='chord'>` +
        `{{ piece.value }}` +
      `</span>` +
    `</template>` +
    `<template [ngIf]='!lineMetaData.isChord'>` +
      `<span class='non-chord'>` +
        `{{ lineMetaData.lineData[0].value }}` +
      `</span>` +
    `</template>` +
  `</span>
`
  ,
  styles: [
    '.chord, .non-chord { display: inline-block; }',
   ]
})
export class ChordLineComponent implements OnInit {
  @Input() lineMetaData: any;

  constructor() { }

  ngOnInit() {
  }
}

