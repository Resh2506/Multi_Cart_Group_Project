import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooesComponent } from './shooes.component';

describe('ShooesComponent', () => {
  let component: ShooesComponent;
  let fixture: ComponentFixture<ShooesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShooesComponent]
    });
    fixture = TestBed.createComponent(ShooesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
