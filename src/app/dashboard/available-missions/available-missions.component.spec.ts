import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMissionsComponent } from './available-missions.component';

describe('AvailableMissionsComponent', () => {
  let component: AvailableMissionsComponent;
  let fixture: ComponentFixture<AvailableMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
