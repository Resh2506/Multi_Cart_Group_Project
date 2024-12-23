import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroNewComponent } from './metro-new.component';

describe('MetroNewComponent', () => {
  let component: MetroNewComponent;
  let fixture: ComponentFixture<MetroNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetroNewComponent]
    });
    fixture = TestBed.createComponent(MetroNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
