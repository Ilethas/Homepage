import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallArkanoidComponent } from './small-arkanoid.component';

describe('SmallArkanoidComponent', () => {
  let component: SmallArkanoidComponent;
  let fixture: ComponentFixture<SmallArkanoidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmallArkanoidComponent]
    });
    fixture = TestBed.createComponent(SmallArkanoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
