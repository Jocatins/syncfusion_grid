import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  GridModule,
  PagerModule,
  PageService,
  SortService,
  GroupService,
} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GridModule, PagerModule],
  providers: [PageService, SortService, GroupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
