import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrStatisticsComponent } from './or-statistics.component';

describe('OrStatisticsComponent', () => {
  let component: OrStatisticsComponent;
  let fixture: ComponentFixture<OrStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
