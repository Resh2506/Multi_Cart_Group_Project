import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGridFourComponent } from './portfolio-grid-four.component';

describe('PortfolioGridFourComponent', () => {
  let component: PortfolioGridFourComponent;
  let fixture: ComponentFixture<PortfolioGridFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioGridFourComponent]
    });
    fixture = TestBed.createComponent(PortfolioGridFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
