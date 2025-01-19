import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private translate: TranslateService) { }
  /**
     * Switches the language using the TranslateService.
     *
     * @param {Event} event - The DOM event triggered by user interaction.
     * @param {string} language - The language code to switch to.
     */
  useLanguage(event: Event, language: string): void {
    event.preventDefault();
    this.translate.use(language);
  }

  tiles: Tile[] = [
    { text: 'Reports', cols: 1, rows: 1, color: '#303035' },
    { text: 'Requests', cols: 1, rows: 1, color: '#303035' },
    { text: 'Priorities', cols: 1, rows: 1, color: '#303035' },
    { text: 'Statistics', cols: 1, rows: 1, color: '#303035' },
  ];
}
