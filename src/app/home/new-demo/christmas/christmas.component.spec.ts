import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasComponent } from './christmas.component';

describe('ChristmasComponent', () => {
  let component: ChristmasComponent;
  let fixture: ComponentFixture<ChristmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChristmasComponent]
    });
    fixture = TestBed.createComponent(ChristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
