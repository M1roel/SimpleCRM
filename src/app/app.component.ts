import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        MatNativeDateModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SimpleCRM';
}
