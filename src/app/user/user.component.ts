import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DialogAddUserComponent } from '../dialogs/dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule,
    RouterModule, TranslateModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
  user = new User();
  allUsers: any[] = [];

  constructor(public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore, @Inject(TranslateService) private translate: TranslateService) { }

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');

    collectionData(usersCollection, { idField: 'id' }).subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {});
  }

  getRoleViewValue(role: string): string {
    const roles = [
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
  
    const roleObj = roles.find(r => r.value === role);
    return roleObj ? roleObj.viewValue : role;
  }
  
}
