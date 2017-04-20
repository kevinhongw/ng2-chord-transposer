import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordLineComponent } from './chord-line.component';

describe('ChordLineComponent', () => {
  let component: ChordLineComponent;
  let fixture: ComponentFixture<ChordLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
