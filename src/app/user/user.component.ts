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
import { TranslateModule } from '@ngx-translate/core';


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

  constructor(public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore) { }

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
}
