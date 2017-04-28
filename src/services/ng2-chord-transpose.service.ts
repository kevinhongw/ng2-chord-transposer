import { Injectable } from '@angular/core';

@Injectable()
export class Ng2ChordTransposeService {

  private keysList: Array<string> = ['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];

  private keys: Array<any> = [
    { name: 'Ab', value: 0,  type: 'F' },
    { name: 'A',  value: 1,  type: 'N' },
    { name: 'A#', value: 2,  type: 'S' },
    { name: 'Bb', value: 2,  type: 'F' },
    { name: 'B',  value: 3,  type: 'N' },
    { name: 'C',  value: 4,  type: 'N' },
    { name: 'C#', value: 5,  type: 'S' },
    { name: 'Db', value: 5,  type: 'F' },
    { name: 'D',  value: 6,  type: 'N' },
    { name: 'D#', value: 7,  type: 'S' },
    { name: 'Eb', value: 7,  type: 'F' },
    { name: 'E',  value: 8,  type: 'N' },
    { name: 'F',  value: 9,  type: 'N' },
    { name: 'F#', value: 10, type: 'S' },
    { name: 'Gb', value: 10, type: 'F' },
    { name: 'G',  value: 11, type: 'N' },
    { name: 'G#', value: 0,  type: 'S' }
  ];

  private regexes: any = {
    chordRegex: /^\(?[A-G][b#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7#5|7#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|sus4|add2|add4|add9|aug|dim|dim7|M7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*(\/[A-G][b#]*)*\)?$/,
    chordReplaceRegex: /([A-G][b#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7#5|7#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|sus4|add2|add4|add9|aug|dim|dim7|M7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)/g
  };

  constructor() {

  }

  getKeysList(): Array<string> {
    return this.keysList;
  }

  getMusicKeys(): any {
    return this.keys;
  }

  getRegexes(): any {
    return this.regexes;
  }

  getKeyByValue(value: number): any {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (value === this.keys[i].value) {
        return this.keys[i];
      }
    }
  };

  getKeyByName(name: string): any {
    let i;
    if (name.charAt(name.length - 1) === 'm') {
      name = name.substring(0, name.length - 1);
    }
    for (i = 0; i < this.keys.length; i++) {
      if (name === this.keys[i].name) {
        return this.keys[i];
      }
    }
  }

  getNewKey(oldKey: string, delta: number, targetKey: any): any {
    let keyValue = this.getKeyByName(oldKey).value + delta;
    if (keyValue > 11) {
        keyValue -= 12;
    } else if (keyValue < 0) {
        keyValue += 12;
    }
    let i = 0;
    if (keyValue === 0 || keyValue === 2 || keyValue === 5 || keyValue === 7 || keyValue === 10) {
      switch (targetKey) {
        case "A":
        case "A#":
        case "B":
        case "C":
        case "C#":
        case "D":
        case "D#":
        case "E":
        case "F#":
        case "G":
        case "G#":
          for (; i < this.keys.length; i++) {
            if (this.keys[i].value === keyValue && this.keys[i].type === 'S') {
              return this.keys[i];
            }
          }
          break;
        default:
          for (; i < this.keys.length; i++) {
            if (this.keys[i].value === keyValue && this.keys[i].type === 'F') {
              return this.keys[i];
            }
          }
      }
    } else {
      for (; i < this.keys.length; i++) {
        if (this.keys[i].value === keyValue) {
          return this.keys[i];
        }
      }
    }
  }

  getChordRoot(input: string): any {
    if (input.length > 1 && (input.charAt(1) === 'b' || input.charAt(1) === '#')) {
      return input.substring(0, 2);
    } else {
      return input.substring(0, 1);
    }
  };

  transposeChord(oldChord: string, delta: number, targetKey: string): any {
    const oldChordRoot = this.getChordRoot(oldChord),
          newChordRoot = this.getNewKey(oldChordRoot, delta, targetKey);
    return newChordRoot.name + oldChord.substring(oldChordRoot.length);
  };

  isChordLine(input: string): any {
    const tokens = input.replace(/\s+/, ' ').split(' ');
    for (let i = 0; i < tokens.length; i++) {
      // !tokens[i].trim().length === 0 doesnt make sense yet
      if (tokens[i] === '') {
        continue;
      }
      if (!tokens[i].match(this.regexes.chordRegex)) {
        return false;
      }
    }
    return true;
  }


}
