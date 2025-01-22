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
  title = 'processed (sterilized) sieves';

  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions!: ChartOptions<'line'>;
  public lineChartLegend = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.lineChartData = this.dataService.getChartData();
  }
}
