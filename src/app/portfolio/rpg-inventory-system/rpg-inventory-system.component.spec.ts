import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPGInventorySystemComponent } from './rpg-inventory-system.component';

describe('RpgInventorySystemComponent', () => {
  let component: RPGInventorySystemComponent;
  let fixture: ComponentFixture<RPGInventorySystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RPGInventorySystemComponent]
    });
    fixture = TestBed.createComponent(RPGInventorySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
