import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})

export class DialogAddUserComponent {

  user = new User;
  birthDate: Date = new Date;
  constructor(@Inject(AngularFirestore) private firestore: AngularFirestore) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);

    this.firestore.collection('users').add(this.user).then((result: any) => {
      console.log('Adding user finished', result)
    });
  }
}
