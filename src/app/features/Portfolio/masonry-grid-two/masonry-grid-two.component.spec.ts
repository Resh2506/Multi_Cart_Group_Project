import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGridTwoComponent } from './masonry-grid-two.component';

describe('MasonryGridTwoComponent', () => {
  let component: MasonryGridTwoComponent;
  let fixture: ComponentFixture<MasonryGridTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryGridTwoComponent]
    });
    fixture = TestBed.createComponent(MasonryGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
