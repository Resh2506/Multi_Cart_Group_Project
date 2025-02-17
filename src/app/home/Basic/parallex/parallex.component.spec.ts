import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallexComponent } from './parallex.component';

describe('ParallexComponent', () => {
  let component: ParallexComponent;
  let fixture: ComponentFixture<ParallexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParallexComponent]
    });
    fixture = TestBed.createComponent(ParallexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
