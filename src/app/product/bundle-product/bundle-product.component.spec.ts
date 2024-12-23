import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleProductComponent } from './bundle-product.component';

describe('BundleProductComponent', () => {
  let component: BundleProductComponent;
  let fixture: ComponentFixture<BundleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundleProductComponent]
    });
    fixture = TestBed.createComponent(BundleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
