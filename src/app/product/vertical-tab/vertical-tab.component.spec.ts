import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTabComponent } from './vertical-tab.component';

describe('VerticalTabComponent', () => {
  let component: VerticalTabComponent;
  let fixture: ComponentFixture<VerticalTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalTabComponent]
    });
    fixture = TestBed.createComponent(VerticalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
