import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private translate: TranslateService) {}
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
}
