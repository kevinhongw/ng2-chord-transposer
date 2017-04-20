import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chord-line',
  templateUrl: './chord-line.component.html',
  styleUrls: ['./chord-line.component.css']
})
export class ChordLineComponent implements OnInit {
  @Input() lineMetaData: any;

  constructor() { }

  ngOnInit() {
  }

}

  /*
    lineData Format:
      [
        {
          isChord: true,
          lineData:[ { isWhiteSpc: false, value: 'E'} ]
        }
      ]
   */
