import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGridFourComponent } from './masonry-grid-four.component';

describe('MasonryGridFourComponent', () => {
  let component: MasonryGridFourComponent;
  let fixture: ComponentFixture<MasonryGridFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryGridFourComponent]
    });
    fixture = TestBed.createComponent(MasonryGridFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
