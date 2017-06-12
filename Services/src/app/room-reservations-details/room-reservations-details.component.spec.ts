import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReservationsDetailsComponent } from './room-reservations-details.component';

describe('RoomReservationsDetailsComponent', () => {
  let component: RoomReservationsDetailsComponent;
  let fixture: ComponentFixture<RoomReservationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomReservationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReservationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
