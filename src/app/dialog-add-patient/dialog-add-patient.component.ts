import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../models/patient.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-add-patient',
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
  templateUrl: './dialog-add-patient.component.html',
  styleUrl: './dialog-add-patient.component.scss',
})

export class DialogAddPatientComponent {

  loading = false;
  patient = new Patient;
  birthDate: Date = new Date;
  surgeryDate: Date = new Date;
  constructor(@Inject(Firestore) private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddPatientComponent>) {}

  savepatient() {
    this.patient.birthDate = this.birthDate.getTime();
    this.patient.date = this.surgeryDate.getTime();
  
    const patientData = { ...this.patient };
  
    console.log('Current patient is', patientData);
    this.loading = true;
  
    const patientsCollection = collection(this.firestore, 'patients');
    addDoc(patientsCollection, patientData)
      .then((result) => {
        console.log('Adding patient finished', result);
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error adding patient:', error);
      });
  }
}
