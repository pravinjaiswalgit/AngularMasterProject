import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamlandingComponent } from './teamlanding.component';

describe('TeamlandingComponent', () => {
  let component: TeamlandingComponent;
  let fixture: ComponentFixture<TeamlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamlandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
