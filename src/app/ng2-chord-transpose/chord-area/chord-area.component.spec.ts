import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordAreaComponent } from './chord-area.component';

describe('ChordAreaComponent', () => {
  let component: ChordAreaComponent;
  let fixture: ComponentFixture<ChordAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
