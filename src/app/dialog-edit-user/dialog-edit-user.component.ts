import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
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
  userId = '';
  constructor(@Inject(Firestore) private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  saveUser() {
    if (!this.userId) {
      console.error('No userId found for updating the user data.');
      return;
    }
  
    this.user.birthDate = this.birthDate.getTime();
  
    const updatedData = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      birthDate: this.user.birthDate,
    };
  
    this.loading = true;
  
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
  
    updateDoc(userDocRef, updatedData)
      .then(() => {
        console.log('User data updated successfully');
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
        this.loading = false;
      });
  }
}
