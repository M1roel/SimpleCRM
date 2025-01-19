import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrScheduleComponent } from './or-schedule.component';

describe('OrScheduleComponent', () => {
  let component: OrScheduleComponent;
  let fixture: ComponentFixture<OrScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
