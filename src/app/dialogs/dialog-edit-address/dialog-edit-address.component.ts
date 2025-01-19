import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
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
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  loading = false;
  user = new User;
  userId = '';

  constructor(@Inject(Firestore) private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  saveUser() {
    if (!this.userId) {
      console.error('No userId found for updating the address.');
      return;
    }
  
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    const updatedData = { 
      street: this.user.street, 
      zipCode: this.user.zipCode, 
      city: this.user.city 
    };
  
    this.loading = true;
  
    updateDoc(userDocRef, updatedData)
      .then(() => {
        console.log('User address updated successfully');
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error updating user address:', error);
        this.loading = false;
      });
  }
}
