import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionTwoComponent } from './fashion-two.component';

describe('FashionTwoComponent', () => {
  let component: FashionTwoComponent;
  let fixture: ComponentFixture<FashionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionTwoComponent]
    });
    fixture = TestBed.createComponent(FashionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
