import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThermometerComponent } from './Thermometer/thermometer.component';
import { FormsModule } from '@angular/forms';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ThermometerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LinearGaugeModule,
    DashboardLayoutModule,
    NumericTextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
