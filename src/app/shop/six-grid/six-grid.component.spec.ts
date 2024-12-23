import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixGridComponent } from './six-grid.component';

describe('SixGridComponent', () => {
  let component: SixGridComponent;
  let fixture: ComponentFixture<SixGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixGridComponent]
    });
    fixture = TestBed.createComponent(SixGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
