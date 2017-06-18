import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaceComponent } from './user-place.component';

describe('UserPlaceComponent', () => {
  let component: UserPlaceComponent;
  let fixture: ComponentFixture<UserPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
