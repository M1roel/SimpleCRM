import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { User } from '../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { DialogEditAddressComponent } from '../dialogs/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialogs/dialog-edit-user/dialog-edit-user.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, TranslateModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  user: User = new User();

  constructor(
    public dialog: MatDialog, 
    @Inject(Firestore) private firestore: Firestore, 
    private route: ActivatedRoute
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
}
