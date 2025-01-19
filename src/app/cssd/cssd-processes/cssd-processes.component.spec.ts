import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssdProcessesComponent } from './cssd-processes.component';

describe('CssdProcessesComponent', () => {
  let component: CssdProcessesComponent;
  let fixture: ComponentFixture<CssdProcessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssdProcessesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssdProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
