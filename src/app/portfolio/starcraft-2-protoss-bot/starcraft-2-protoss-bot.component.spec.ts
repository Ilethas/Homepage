import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCraft2ProtossBotComponent } from './starcraft-2-protoss-bot.component';

describe('StarCraft2ProtossBotComponent', () => {
  let component: StarCraft2ProtossBotComponent;
  let fixture: ComponentFixture<StarCraft2ProtossBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarCraft2ProtossBotComponent]
    });
    fixture = TestBed.createComponent(StarCraft2ProtossBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
