import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypogrophyNewComponent } from './typogrophy-new.component';

describe('TypogrophyNewComponent', () => {
  let component: TypogrophyNewComponent;
  let fixture: ComponentFixture<TypogrophyNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypogrophyNewComponent]
    });
    fixture = TestBed.createComponent(TypogrophyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
