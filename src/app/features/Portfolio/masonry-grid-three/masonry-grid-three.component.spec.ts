import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGridThreeComponent } from './masonry-grid-three.component';

describe('MasonryGridThreeComponent', () => {
  let component: MasonryGridThreeComponent;
  let fixture: ComponentFixture<MasonryGridThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryGridThreeComponent]
    });
    fixture = TestBed.createComponent(MasonryGridThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
