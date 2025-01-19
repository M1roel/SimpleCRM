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
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-or-schedule',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule,
    RouterModule, TranslateModule],
  templateUrl: './or-schedule.component.html',
  styleUrl: './or-schedule.component.scss'
})
export class OrScheduleComponent implements OnInit {

  patient = new Patient();
  allPatients: any[] = [];

  constructor(public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore) { }

  ngOnInit(): void {
    const patientsCollection = collection(this.firestore, 'patients');

    collectionData(patientsCollection, { idField: 'id' }).subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allPatients = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddPatientComponent, {});
  }
}
