import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtytCounterComponent } from './qtyt-counter.component';

describe('QtytCounterComponent', () => {
  let component: QtytCounterComponent;
  let fixture: ComponentFixture<QtytCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QtytCounterComponent]
    });
    fixture = TestBed.createComponent(QtytCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
