import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvegridComponent } from './solvegrid.component';

describe('SolvegridComponent', () => {
  let component: SolvegridComponent;
  let fixture: ComponentFixture<SolvegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
