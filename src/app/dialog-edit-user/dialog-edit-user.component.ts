import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  loading = false;
  user = new User;
  birthDate: Date = new Date;
  constructor(@Inject(Firestore) private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
  
    const userData = { ...this.user };
  
    console.log('Current user is', userData);
    this.loading = true;
  
    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, userData)
      .then((result) => {
        console.log('Adding user finished', result);
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  }
}
