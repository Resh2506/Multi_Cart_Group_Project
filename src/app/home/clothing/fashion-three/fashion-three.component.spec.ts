import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionThreeComponent } from './fashion-three.component';

describe('FashionThreeComponent', () => {
  let component: FashionThreeComponent;
  let fixture: ComponentFixture<FashionThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionThreeComponent]
    });
    fixture = TestBed.createComponent(FashionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
