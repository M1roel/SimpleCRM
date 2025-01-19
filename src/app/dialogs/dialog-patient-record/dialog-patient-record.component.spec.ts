import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPatientRecordComponent } from './dialog-patient-record.component';

describe('DialogPatientRecordComponent', () => {
  let component: DialogPatientRecordComponent;
  let fixture: ComponentFixture<DialogPatientRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPatientRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogPatientRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
