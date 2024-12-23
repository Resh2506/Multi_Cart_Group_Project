import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessTwoComponent } from './order-success-two.component';

describe('OrderSuccessTwoComponent', () => {
  let component: OrderSuccessTwoComponent;
  let fixture: ComponentFixture<OrderSuccessTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSuccessTwoComponent]
    });
    fixture = TestBed.createComponent(OrderSuccessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
