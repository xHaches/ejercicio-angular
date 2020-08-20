import { Component } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {



  public doughnutChartLabels1: Label[] = ['Papas chilosas', 'Chesco', 'Chicles'];
  public doughnutChartData1: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartLabels2: Label[] = ['Tacos', 'Tortas', 'Gorditas'];
  public doughnutChartData2: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartLabels3: Label[] = ['Pizza', 'Hamburguesa', 'Hot dog'];
  public doughnutChartData3: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartLabels4: Label[] = ['Tamales (Guajolota)', 'Enchiladas', 'Chilaquiles'];
  public doughnutChartData4: MultiDataSet = [
    [350, 450, 100],
  ];
  
}
