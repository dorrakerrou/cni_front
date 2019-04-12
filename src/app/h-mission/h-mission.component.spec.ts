import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HMissionComponent } from './h-mission.component';

describe('HMissionComponent', () => {
  let component: HMissionComponent;
  let fixture: ComponentFixture<HMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
