import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageComponent } from './left-image.component';

describe('LeftImageComponent', () => {
  let component: LeftImageComponent;
  let fixture: ComponentFixture<LeftImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftImageComponent]
    });
    fixture = TestBed.createComponent(LeftImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
