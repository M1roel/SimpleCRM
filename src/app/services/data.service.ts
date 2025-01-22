import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getChartData(): ChartConfiguration<'line'>['data'] {
    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          data: [40, 45, 50, 55, 60, 65, 70, 75, 70, 60, 50, 45],
          label: '2023',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        },
        {
          data: [45, 50, 60, 70, 75, 65, 50, 60, 55, 50, 45, 45],
          label: '2024',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(0,255,0,0.3)',
        },
      ],
    };
  }

  getPieChartData() {
    return {
      labels: ['Users', 'Patients'],
      datasets: [
        {
          data: [300, 500],
        },
      ],
    };
  }

  getChartOptions() {
    return {
      responsive: false,
    };
  }
}
