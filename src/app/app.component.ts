import { single1 } from './data1';
import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grafico em NGX';

  single!: any[];
  multi!: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  legendAxisLabel='Times';
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Times';
  showYAxisLabel = true;
  yAxisLabel = 'Placar';

  colorScheme = {
    domain: ['#00ff00', '#ff0000', '#0000ff', '#AAAAAA']
  };

  //pizza
  single1!: any[];
  view1: any[] = [700, 400];

  // options
  gradient1: boolean = true;
  showLegend1: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme1 = {
    domain: ['#00ff00', '#ff0000', '#0000ff', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
    //pizza
    Object.assign(this, { single1 });
  }


}
