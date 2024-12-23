import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPopUpComponent } from './side-bar-pop-up.component';

describe('SideBarPopUpComponent', () => {
  let component: SideBarPopUpComponent;
  let fixture: ComponentFixture<SideBarPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarPopUpComponent]
    });
    fixture = TestBed.createComponent(SideBarPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
