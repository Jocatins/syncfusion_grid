import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  GridModule,
  PagerModule,
  EditService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GridModule,
    PagerModule,
    DateRangePickerModule,
    FormsModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    DropDownListAllModule,
  ],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
