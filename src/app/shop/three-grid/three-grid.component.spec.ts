import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeGridComponent } from './three-grid.component';

describe('ThreeGridComponent', () => {
  let component: ThreeGridComponent;
  let fixture: ComponentFixture<ThreeGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeGridComponent]
    });
    fixture = TestBed.createComponent(ThreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
