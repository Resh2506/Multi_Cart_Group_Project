import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOutsideComponent } from './image-outside.component';

describe('ImageOutsideComponent', () => {
  let component: ImageOutsideComponent;
  let fixture: ComponentFixture<ImageOutsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageOutsideComponent]
    });
    fixture = TestBed.createComponent(ImageOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
