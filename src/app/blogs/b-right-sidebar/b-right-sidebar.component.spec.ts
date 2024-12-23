import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BRightSidebarComponent } from './b-right-sidebar.component';

describe('BRightSidebarComponent', () => {
  let component: BRightSidebarComponent;
  let fixture: ComponentFixture<BRightSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BRightSidebarComponent]
    });
    fixture = TestBed.createComponent(BRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
