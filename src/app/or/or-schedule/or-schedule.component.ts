import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DialogAddPatientComponent } from '../../dialogs/dialog-add-patient/dialog-add-patient.component';
import { Patient } from '../../models/patient.class';
import { Firestore, collection, addDoc, doc, updateDoc, collectionData } from '@angular/fire/firestore';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-or-schedule',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule,
    RouterModule, TranslateModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './or-schedule.component.html',
  styleUrl: './or-schedule.component.scss'
})
export class OrScheduleComponent implements OnInit {

  patient = new Patient();
  allPatients: any[] = [];

  constructor(public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore) { }

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Fetches patient data from the Firestore `patients` collection and subscribes to updates.
   */
  ngOnInit(): void {
    const patientsCollection = collection(this.firestore, 'patients');

    collectionData(patientsCollection, { idField: 'id' }).subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allPatients = changes.map((patient: any) => ({
        ...patient,
        status: patient.status || 'registered'
      }));
    });
  }

  /**
   * Opens a dialog to add a new patient.
   */
  openDialog() {
    this.dialog.open(DialogAddPatientComponent, {});
  }

  async updateStatus(patient: any): Promise<void> {
    if (patient.id) {
      try {
        const patientDocRef = doc(this.firestore, `patients/${patient.id}`);
        await updateDoc(patientDocRef, { status: patient.status });
        console.log(`Patient ${patient.id} status updated to: ${patient.status}`);
      } catch (error) {
        console.error("Error updating patient status:", error);
      }
    } else {
      console.warn("Patient ID is missing. Cannot update status.");
    }
  }
}
