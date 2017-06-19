import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccommodationComponent } from './user-accommodation.component';

describe('UserAccommodationComponent', () => {
  let component: UserAccommodationComponent;
  let fixture: ComponentFixture<UserAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
