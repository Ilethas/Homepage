import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeComponent } from './portfolio-home.component';

describe('PortfolioHomeComponent', () => {
  let component: PortfolioHomeComponent;
  let fixture: ComponentFixture<PortfolioHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioHomeComponent]
    });
    fixture = TestBed.createComponent(PortfolioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
