import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGridFullWidthComponent } from './masonry-grid-full-width.component';

describe('MasonryGridFullWidthComponent', () => {
  let component: MasonryGridFullWidthComponent;
  let fixture: ComponentFixture<MasonryGridFullWidthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryGridFullWidthComponent]
    });
    fixture = TestBed.createComponent(MasonryGridFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
