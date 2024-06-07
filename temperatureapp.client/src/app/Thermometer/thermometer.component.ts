import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge';
import { IPointerDragEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
  selector: 'thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css'],
  providers: [GaugeTooltipService]
})

export class ThermometerComponent {
  tempCelsius: any;
  tempfarenheight: any;

  private SERVER_URL = "https://localhost:7289";
  constructor(private httpClient: HttpClient) { }


  public container?: Object;
  public major?: Object;
  public minor?: Object;
  public farenheightmajor?: Object;
  public farenheightminor?: Object;

  public celciusLabel?: Object;
  public farenheightLabel?: Object;

  public cellSpacing: number[] = [20, 20];
  public columns: number = 3;

  ngOnInit(): void {

    this.celciusLabel = {
      format: '{value}°C'
    };

    this.farenheightLabel = {
      format: '{value}°F'
    };

    this.major = {
      interval: 30,
      color: "Orange"
    };

    this.minor = {
      interval: 10,
      color: 'red'
    };

    this.farenheightmajor = {
      interval: 60,
      color: "Blue"
    };

    this.farenheightminor = {
      interval: 20,
      color: 'red'
    };

    this.container = {
      width: 30,
      type: "Thermometer"
    };

  }

  dragEnd(args: IPointerDragEventArgs) {
    console.log(args);
    this.tempCelsius = args.currentValue;
    this.getFarenheight(args.currentValue);
  }

  getFarenheight(paramCelsius: any) {
    console.log(paramCelsius);
    this.httpClient.get(`${this.SERVER_URL}/api/temperature/GetFarenheight/` + this.tempCelsius).subscribe(
      (result) => {
        this.tempfarenheight = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCelsius(paramfarenheight: any) {
    console.log(paramfarenheight);
    this.httpClient.get(`${this.SERVER_URL}/api/temperature/GetCelsius/` + this.tempfarenheight).subscribe(
      (result) => {
        this.tempCelsius = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
  


