import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData, deleteDoc } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { User } from '../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { DialogEditAddressComponent } from '../dialogs/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialogs/dialog-edit-user/dialog-edit-user.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, TranslateModule, MatSnackBarModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  user: User = new User();

  constructor(
    public dialog: MatDialog,
    @Inject(Firestore) private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') || '';
      console.log('GOT ID', this.userId);
      this.getUser();
    });
  }

  getUser() {
    if (this.userId) {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      docData(userDocRef).subscribe((user: any) => {
        this.user = new User(user);
      });
    } else {
      console.error('No userId found');
    }
  }

  openAddressDialog() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  openUserEditDialog() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  async deleteUser() {
    if (!this.userId) {
      console.error('No userId found, cannot delete user');
      this.snackBar.open('Error: User ID not found.', 'Close', { duration: 3000 });
      return;
    }

    try {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      await this.router.navigate(['/user']);
      await deleteDoc(userDocRef);
      this.snackBar.open(this.translate.instant('USER_DETAIL.DELETE_SUCCESS'), this.translate.instant('USER_DETAIL.DELETE_CLOSE'), { duration: 3000 });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}
