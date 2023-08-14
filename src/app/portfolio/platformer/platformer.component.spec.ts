import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformerComponent } from './platformer.component';

describe('PlatformerComponent', () => {
  let component: PlatformerComponent;
  let fixture: ComponentFixture<PlatformerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlatformerComponent]
    });
    fixture = TestBed.createComponent(PlatformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
