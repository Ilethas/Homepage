import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerSpaceShooterComponent } from './multiplayer-space-shooter.component';

describe('MultiplayerSpaceShooterComponent', () => {
  let component: MultiplayerSpaceShooterComponent;
  let fixture: ComponentFixture<MultiplayerSpaceShooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultiplayerSpaceShooterComponent]
    });
    fixture = TestBed.createComponent(MultiplayerSpaceShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
