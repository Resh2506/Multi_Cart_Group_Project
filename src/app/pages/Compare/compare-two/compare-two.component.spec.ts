import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTwoComponent } from './compare-two.component';

describe('CompareTwoComponent', () => {
  let component: CompareTwoComponent;
  let fixture: ComponentFixture<CompareTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareTwoComponent]
    });
    fixture = TestBed.createComponent(CompareTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
