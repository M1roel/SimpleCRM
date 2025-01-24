import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData, deleteDoc } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { Patient } from '../models/patient.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DialogPatientRecordComponent } from '../dialogs/dialog-patient-record/dialog-patient-record.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, TranslateModule, MatSnackBarModule],
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  patientId = '';
  patient: Patient = new Patient();

  constructor(
    public dialog: MatDialog, 
    @Inject(Firestore) private firestore: Firestore, 
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private translate: TranslateService
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
        this.patient = new Patient(patient);
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

  async deletePatient() {
    if (!this.patientId) {
      console.error('No patientId found, cannot delete patient');
      this.snackBar.open('Error: Patient ID not found.', 'Close', { duration: 3000 });
      return;
    }

    try {
      const patientDocRef = doc(this.firestore, `patients/${this.patientId}`);
      await this.router.navigate(['or/schedule']);
      await deleteDoc(patientDocRef);
      this.snackBar.open(this.translate.instant('PATIENT_DETAIL.DELETE_SUCCESS'), this.translate.instant('PATIENT_DETAIL.DELETE_CLOSE'), { duration: 3000 });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}
