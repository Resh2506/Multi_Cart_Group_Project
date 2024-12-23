import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartModelPopupComponent } from './cart-model-popup.component';

describe('CartModelPopupComponent', () => {
  let component: CartModelPopupComponent;
  let fixture: ComponentFixture<CartModelPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartModelPopupComponent]
    });
    fixture = TestBed.createComponent(CartModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
