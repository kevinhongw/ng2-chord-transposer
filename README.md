# Ng2ChordTransposer
[![npm version](https://badge.fury.io/js/ng2-chord-transpose.svg)](https://badge.fury.io/js/ng2-chord-transpose.svg) [![npm](https://img.shields.io/npm/dm/ng2-chord-transpose.svg)](https://www.npmjs.com/package/ng2-chord-transpose)

### Chord Transpose Component for Angular 2

Angular component that enable the user to input plain text guitar chord string and able to change key instantly.

**DEMO**

Pleaes clone then navigate to the demo folder.

Run `npm install` then `ng serve`

This module is also being used in iOS app "BandMan" as its transpose library.

https://www.bandman.io

**FEATURES**
* Guitar chord sheet render
* Instant transpose

## USAGE
```
npm install ng2-chord-transpose
```

##### Module

```js
import { Ng2ChordTransposeModule } from 'ng2-chord-transpose';

@NgModule({
  ...
  imports: [
    ...
    Ng2ChordTransposeModule
  ],
  providers: [],
  ...
})
export class AppModule { }
```

##### Component

```js
import { Ng2ChordTransposeComponent } from 'ng2-chord-transpose';
```
##### HTML template

```html
<ng2-chord-transpose [chordSections]='data.sections' [key]='data.key'></ng2-chord-transpose>
```

## INPUT ATTRIBUTES

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th align="center">Type</th>
      <th align="center">Value</th>
    </tr>
    <tr>
      <td><code>chordSections</code></td>
      <td align="center"><code>[]</code></td>
      <td align="left">
        <code>
        {
          title: 'section title',
          body: 'section body'
        }
        </code>
      </td>
    </tr>
    <tr>
      <td><code>key</code></td>
      <td align="center"><code>string</code></td>
      <td align="left">The key of the song.<br>
      Can be any one of the following:<br>
      <code>['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db',<br>
       'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#']</code>
      </td>
    </tr>
    <tr>
      <td><code>showUpDown</code></td>
      <td align="center"><code>boolean</code></td>
      <td align="left">Show up/down control button if true<br>
      Default: <code>true</code>
      </td>
    </tr>
  </tbody>
</table>

## FUTURE FEATURES
* Test cases

## CREDITS
Created by [Kevin Hong](https://github.com/KevinHong913)

Inspired by [angular-chord-transposer](https://github.com/hrgui/angular-chord-transposer)

## LICENSE
 [MIT](/LICENSE)
