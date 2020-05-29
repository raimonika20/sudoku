import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleargridComponent } from './cleargrid.component';

describe('CleargridComponent', () => {
  let component: CleargridComponent;
  let fixture: ComponentFixture<CleargridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleargridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleargridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
