import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-add-user',
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
    TranslateModule,
    MatSelectModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {

  loading = false;
  user = new User;
  birthDate: Date = new Date();
  roles: Role[] = [];
  selectedRole: string = '';

  constructor(
    @Inject(Firestore) private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private translate: TranslateService
  ) {
    this.initializeRoles();
  }

  private initializeRoles(): void {
    this.roles = [
      { value: 'doctor', viewValue: this.translate.instant('ADD_USER.ROLES.DOCTOR') },
      { value: 'nurse', viewValue: this.translate.instant('ADD_USER.ROLES.NURSE') },
      { value: 'controller', viewValue: this.translate.instant('ADD_USER.ROLES.CONTROLLER') },
      { value: 'aemp', viewValue: this.translate.instant('ADD_USER.ROLES.AEMP') },
      { value: 'op-manager', viewValue: this.translate.instant('ADD_USER.ROLES.OP_MANAGER') },
      { value: 'admin-staff', viewValue: this.translate.instant('ADD_USER.ROLES.ADMIN_STAFF') },
      { value: 'it-support', viewValue: this.translate.instant('ADD_USER.ROLES.IT_SUPPORT') },
      { value: 'quality-manager', viewValue: this.translate.instant('ADD_USER.ROLES.QUALITY_MANAGER') },
      { value: 'physiotherapist', viewValue: this.translate.instant('ADD_USER.ROLES.PHYSIOTHERAPIST') },
      { value: 'lab-technician', viewValue: this.translate.instant('ADD_USER.ROLES.LAB_TECHNICIAN') }
    ];
    this.selectedRole = this.roles[0]?.value;
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    const userData = { ...this.user, role: this.selectedRole };

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
        this.loading = false;
      });
  }

  selectRole(event: Event) {
    this.selectedRole = (event.target as HTMLSelectElement).value;
  }
}
