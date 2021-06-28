import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamldetailsComponent } from './teamldetails.component';

describe('TeamldetailsComponent', () => {
  let component: TeamldetailsComponent;
  let fixture: ComponentFixture<TeamldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
