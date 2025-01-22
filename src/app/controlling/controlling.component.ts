import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DataService } from '../services/data.service';

@Component({
  standalone: true,
  selector: 'app-controlling',
  templateUrl: './controlling.component.html',
  imports: [CommonModule, NgChartsModule],
  styleUrls: ['./controlling.component.scss'],
})
export class ControllingComponent implements OnInit {
  constructor(private dataService: DataService) {}

  title = 'processed (sterilized) sieves';

  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = true;

  ngOnInit(): void {
    this.lineChartData = this.dataService.getChartData();
  }
}
