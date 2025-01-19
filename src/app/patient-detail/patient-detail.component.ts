import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { Patient } from '../models/patient.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { DialogPatientRecordComponent } from '../dialogs/dialog-patient-record/dialog-patient-record.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, TranslateModule],
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  patientId = '';
  patient: Patient = new Patient();

  constructor(
    public dialog: MatDialog, 
    @Inject(Firestore) private firestore: Firestore, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.patientId = paramMap.get('id') || '';
      console.log('GOT ID', this.patientId);
      this.getPatient();
    });
  }

  getPatient() {
    if (this.patientId) {
      const patientDocRef = doc(this.firestore, `patients/${this.patientId}`);
      docData(patientDocRef).subscribe((patient: any) => {
        this.patient = new patient(patient);
      });
    } else {
      console.error('No patientId found');
    }
  }

  openPatientRecordDialog() {
    const dialog = this.dialog.open(DialogPatientRecordComponent);
    dialog.componentInstance.patient = new Patient(this.patient.toJSON());
    dialog.componentInstance.patientId = this.patientId;
  }
}
