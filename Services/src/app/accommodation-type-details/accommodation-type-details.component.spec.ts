import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationTypeDetailsComponent } from './accommodation-type-details.component';

describe('AccommodationTypeDetailsComponent', () => {
  let component: AccommodationTypeDetailsComponent;
  let fixture: ComponentFixture<AccommodationTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
