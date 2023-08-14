import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNextNavigationComponent } from './previous-next-navigation.component';

describe('PreviousNextNavigationComponent', () => {
  let component: PreviousNextNavigationComponent;
  let fixture: ComponentFixture<PreviousNextNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PreviousNextNavigationComponent]
    });
    fixture = TestBed.createComponent(PreviousNextNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
