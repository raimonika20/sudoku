import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadsampleComponent } from './reloadsample.component';

describe('ReloadsampleComponent', () => {
  let component: ReloadsampleComponent;
  let fixture: ComponentFixture<ReloadsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloadsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
