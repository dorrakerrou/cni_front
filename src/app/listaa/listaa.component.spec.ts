import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaaComponent } from './listaa.component';

describe('ListaaComponent', () => {
  let component: ListaaComponent;
  let fixture: ComponentFixture<ListaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
