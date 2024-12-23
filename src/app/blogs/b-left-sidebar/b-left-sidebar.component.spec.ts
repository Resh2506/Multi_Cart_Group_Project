import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLeftSidebarComponent } from './b-left-sidebar.component';

describe('BLeftSidebarComponent', () => {
  let component: BLeftSidebarComponent;
  let fixture: ComponentFixture<BLeftSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BLeftSidebarComponent]
    });
    fixture = TestBed.createComponent(BLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
