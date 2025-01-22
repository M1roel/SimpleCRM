import { Injectable, inject } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Firestore, collection, query, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  private firestore: Firestore = inject(Firestore);

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

  async getPieChartData(): Promise<any> {
    const usersRef = collection(this.firestore, 'users');
    const patientsRef = collection(this.firestore, 'patients');

    const usersQuery = query(usersRef);
    const patientsQuery = query(patientsRef);

    try {
      const usersSnapshot = await getDocs(usersQuery);
      const patientsSnapshot = await getDocs(patientsQuery);

      const usersCount = usersSnapshot.size;
      const patientsCount = patientsSnapshot.size;

      return {
        labels: ['Users', 'Patients'],
        datasets: [
          {
            data: [usersCount, patientsCount],
          },
        ],
      };
    } catch (error) {
      console.error('Fehler beim Abrufen der Firestore-Daten:', error);
      throw error;
    }
  }

  getChartOptions() {
    return {
      responsive: false,
    };
  }
}
