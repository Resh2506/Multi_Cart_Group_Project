import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNoSidebarComponent } from './b-no-sidebar.component';

describe('BNoSidebarComponent', () => {
  let component: BNoSidebarComponent;
  let fixture: ComponentFixture<BNoSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BNoSidebarComponent]
    });
    fixture = TestBed.createComponent(BNoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
