import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicTwoComponent } from './electronic-two.component';

describe('ElectronicTwoComponent', () => {
  let component: ElectronicTwoComponent;
  let fixture: ComponentFixture<ElectronicTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicTwoComponent]
    });
    fixture = TestBed.createComponent(ElectronicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
