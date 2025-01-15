import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssdReportsComponent } from './cssd-reports.component';

describe('CssdReportsComponent', () => {
  let component: CssdReportsComponent;
  let fixture: ComponentFixture<CssdReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssdReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssdReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
