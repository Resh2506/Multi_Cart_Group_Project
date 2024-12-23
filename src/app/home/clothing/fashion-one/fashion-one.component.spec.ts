import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionOneComponent } from './fashion-one.component';

describe('FashionOneComponent', () => {
  let component: FashionOneComponent;
  let fixture: ComponentFixture<FashionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionOneComponent]
    });
    fixture = TestBed.createComponent(FashionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
