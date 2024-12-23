import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTopComponent } from './cart-top.component';

describe('CartTopComponent', () => {
  let component: CartTopComponent;
  let fixture: ComponentFixture<CartTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartTopComponent]
    });
    fixture = TestBed.createComponent(CartTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
