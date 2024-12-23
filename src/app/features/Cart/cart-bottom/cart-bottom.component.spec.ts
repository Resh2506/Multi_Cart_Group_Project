import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBottomComponent } from './cart-bottom.component';

describe('CartBottomComponent', () => {
  let component: CartBottomComponent;
  let fixture: ComponentFixture<CartBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartBottomComponent]
    });
    fixture = TestBed.createComponent(CartBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
