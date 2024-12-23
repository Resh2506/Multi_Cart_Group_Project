import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicOneComponent } from './electronic-one.component';

describe('ElectronicOneComponent', () => {
  let component: ElectronicOneComponent;
  let fixture: ComponentFixture<ElectronicOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicOneComponent]
    });
    fixture = TestBed.createComponent(ElectronicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
