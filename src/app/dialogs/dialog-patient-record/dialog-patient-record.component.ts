import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../models/patient.class';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogAddPatientComponent } from '../dialog-add-patient/dialog-add-patient.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    TranslateModule
  ],
  templateUrl: './dialog-patient-record.component.html',
  styleUrl: './dialog-patient-record.component.scss'
})
export class DialogPatientRecordComponent {

  loading = false;
  patient = new Patient;
  patientId = '';

  constructor(@Inject(Firestore) private firestore: Firestore, public dialogRef: MatDialogRef<DialogPatientRecordComponent>) {}

  saveUser() {
    if (!this.patientId) {
      console.error('No userId found for updating the address.');
      return;
    }
  
    const patientDocRef = doc(this.firestore, `patients/${this.patientId}`);
    const updatedData = { 
      street: this.patient.street, 
      zipCode: this.patient.zipCode, 
      city: this.patient.city 
    };
  
    this.loading = true;
  
    updateDoc(patientDocRef, updatedData)
      .then(() => {
        console.log('Patient record updated successfully');
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error updating user address:', error);
        this.loading = false;
      });
  }
}
