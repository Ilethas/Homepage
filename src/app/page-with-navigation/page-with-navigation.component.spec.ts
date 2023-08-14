import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithNavigationComponent } from './page-with-navigation.component';

describe('PageWithNavigationComponent', () => {
  let component: PageWithNavigationComponent;
  let fixture: ComponentFixture<PageWithNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageWithNavigationComponent]
    });
    fixture = TestBed.createComponent(PageWithNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
