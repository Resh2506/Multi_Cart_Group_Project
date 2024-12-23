import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSideBarComponent } from './no-side-bar.component';

describe('NoSideBarComponent', () => {
  let component: NoSideBarComponent;
  let fixture: ComponentFixture<NoSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoSideBarComponent]
    });
    fixture = TestBed.createComponent(NoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
