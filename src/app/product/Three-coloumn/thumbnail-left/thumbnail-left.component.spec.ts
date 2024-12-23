import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailLeftComponent } from './thumbnail-left.component';

describe('ThumbnailLeftComponent', () => {
  let component: ThumbnailLeftComponent;
  let fixture: ComponentFixture<ThumbnailLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailLeftComponent]
    });
    fixture = TestBed.createComponent(ThumbnailLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
