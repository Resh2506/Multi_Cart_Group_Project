import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashComponent } from './vendor-dash.component';

describe('VendorDashComponent', () => {
  let component: VendorDashComponent;
  let fixture: ComponentFixture<VendorDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDashComponent]
    });
    fixture = TestBed.createComponent(VendorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
