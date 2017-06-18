import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegionComponent } from './user-region.component';

describe('UserRegionComponent', () => {
  let component: UserRegionComponent;
  let fixture: ComponentFixture<UserRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
