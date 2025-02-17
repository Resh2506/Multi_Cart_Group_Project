import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailBottomComponent } from './thumbnail-bottom.component';

describe('ThumbnailBottomComponent', () => {
  let component: ThumbnailBottomComponent;
  let fixture: ComponentFixture<ThumbnailBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailBottomComponent]
    });
    fixture = TestBed.createComponent(ThumbnailBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
