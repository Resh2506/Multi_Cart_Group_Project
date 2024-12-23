import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWitdthNewComponent } from './full-witdth-new.component';

describe('FullWitdthNewComponent', () => {
  let component: FullWitdthNewComponent;
  let fixture: ComponentFixture<FullWitdthNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullWitdthNewComponent]
    });
    fixture = TestBed.createComponent(FullWitdthNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
