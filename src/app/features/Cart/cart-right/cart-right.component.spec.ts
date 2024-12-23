import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRightComponent } from './cart-right.component';

describe('CartRightComponent', () => {
  let component: CartRightComponent;
  let fixture: ComponentFixture<CartRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartRightComponent]
    });
    fixture = TestBed.createComponent(CartRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
