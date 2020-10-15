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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GridModule, PagerModule, DateRangePickerModule],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
