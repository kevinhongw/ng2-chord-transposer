import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ChordTransposeComponent } from './ng2-chord-transpose.component';

describe('Ng2ChordTransposeComponent', () => {
  let component: Ng2ChordTransposeComponent;
  let fixture: ComponentFixture<Ng2ChordTransposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ChordTransposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ChordTransposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
