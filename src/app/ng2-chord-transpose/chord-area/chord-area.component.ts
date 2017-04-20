import { Component, OnInit, OnChanges, SimpleChanges, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Ng2ChordTransposeService } from '../ng2-chord-transpose.service';
import { ChordLineComponent } from '../chord-line/chord-line.component';


@Component({
  selector: 'chord-area',
  templateUrl: './chord-area.component.html',
  styleUrls: ['./chord-area.component.css'],
})
export class ChordAreaComponent implements OnInit, OnChanges {
  @Input() chordData: any;
  @Input() chordKey: any;
  @Input() sectionTitle: string;

  private keys: Array<any>;
  private regexes: any;
  lines: Array<any> = [];
  /*
    lines: [
      {
        isChord: true,
        lineData:[ { isWhiteSpc: false, value: 'E'} ]
      }
    ]
   */

  constructor(private chordService: Ng2ChordTransposeService) {
    this.keys = this.chordService.getMusicKeys();
    this.regexes = this.chordService.getRegexes();
  }

  private _wrapChords(input) {
    const lineOutput = [];
    const regex = this.regexes.chordReplaceRegex;
    const matchAry = input.match(regex);
    let lastPos = 0;
    matchAry.forEach(match => {
      const matchPos = input.indexOf(match, lastPos);
      const subStr = input.substring(lastPos, matchPos);
      lineOutput.push({ isWhiteSpc: true, value: subStr });

      lineOutput.push({
        isWhiteSpc: false,
        value: match
      });

      lastPos = matchPos + match.length;
    });
    return lineOutput;
  }
  /* '   Em     F#m   ' */
  private _render(value) {
    this.lines = [];
    // const _this = this;
    if (!value) {
      return;
    }
    this.lines = value.replace('$', '').split('\\n').map(line => {
      if (this.chordService.isChordLine(line)) {
        return { isChord: true, lineData: this._wrapChords(line) };
      } else {
        return { isChord: false, lineData: [ { isWhiteSpc: false, value: line} ] };
      }
    });
  }

  private _getDelta(oldIndex, newIndex) {
    if (oldIndex > newIndex) {
      return 0 - (oldIndex - newIndex);
    } else if (oldIndex < newIndex) {
      return newIndex - oldIndex;
    } else {
      return 0;
    }
  }

  private _transposeSong(oldKey) {
    const delta = this._getDelta(oldKey.value, this.chordKey.value);
    if (delta !== 0) {
      for (let i = 0 ; i < this.lines.length ; ++i) {
        if ( this.lines[i].isChord ) {
          for (let j = 0 ; j < this.lines[i].lineData.length ; ++j) {
            if (!this.lines[i].lineData[j].isWhiteSpc) {
              this.lines[i].lineData[j].value = this.chordService.transposeChord(this.lines[i].lineData[j].value, delta, this.chordKey.name);
            }
          }
        }
      }
    }
    // this.chordKey = newKey;
  }

  ngOnChanges(changes: SimpleChanges) {
    // if key change
    if (changes['chordKey'] !== undefined) {
      if (!changes['chordKey'].currentValue) {
        return;
      }
      if (changes['chordKey'].previousValue) {
        // this.chordKey = this.chordService.getKeyByName(changes['chordKey'].previousValue);
      }
      if (changes['chordKey'].firstChange) {
        this._transposeSong(changes['chordKey'].currentValue);
      } else {
        this._transposeSong(changes['chordKey'].previousValue);
      }
    }

    // if chord data change
    if (changes['chordData'] !== undefined) {
      this._render(changes['chordData'].currentValue);
    }
  }

  ngOnInit() {

  }

}
