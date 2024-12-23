import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLeftComponent } from './cart-left.component';

describe('CartLeftComponent', () => {
  let component: CartLeftComponent;
  let fixture: ComponentFixture<CartLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartLeftComponent]
    });
    fixture = TestBed.createComponent(CartLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
