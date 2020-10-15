import { Component } from '@angular/core';
import {
  EditSettingsModel,
  IEditCell,
  ToolbarItems,
  SaveEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { Internationalization } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<ejs-grid
    [dataSource]="data"
    [toolbar]="toolbarOption"
    [editSettings]="editOption"
    (actionBegin)="actionBegin($event)"
  >
    <e-columns>
      <e-column
        field="OrderID"
        headerText="Order ID"
        textAlign="Right"
        width="90"
      ></e-column>
      <e-column
        field="CustomerID"
        headerText="Customer ID"
        width="120"
      ></e-column>
      <e-column
        field="Freight"
        headerText="Freight"
        textAlign="Right"
        format="C2"
        width="90"
      ></e-column>
      <e-column
        field="OrderDate"
        headerText="Order Date"
        textAlign="Right"
        format="yMd"
        width="120"
      ></e-column>
      <e-column
        field="ShipPostalCode"
        headerText="Ship Postal Code"
        textAlign="Right"
        width="120"
      ></e-column>
    </e-columns>
    <ng-template #editSettingsTemplate let-data>
      <div ngForm #orderForm="ngForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <div class="e-float-input e-control-wrapper">
              <input
                [(ngModel)]="orderData.OrderID"
                id="OrderID"
                name="OrderID"
                type="text"
                [attr.disabled]="!data.isAdd ? '' : null"
              />
              <span class="e-float-line"></span>
              <label class="e-float-text e-label-top" for="OrderID">
                Order ID</label
              >
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="e-float-input e-control-wrapper">
              <input
                [(ngModel)]="orderData.CustomerID"
                id="CustomerID"
                name="CustomerID"
                type="text"
              />
              <span class="e-float-line"></span>
              <label class="e-float-text e-label-top" for="CustomerID">
                Customer ID</label
              >
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <ejs-numerictextbox
              [(ngModel)]="orderData.EmployeeID"
              name="EmployeeID"
              placeholder="EmployeeID"
            ></ejs-numerictextbox>
          </div>
        </div>
        <div class="form-group col-md-6">
          <ejs-daterangepicker
            [(ngModel)]="orderData.Validity"
            name="Validity"
            placeholder="Validity"
          >
          </ejs-daterangepicker>
        </div>
        <div class="form-group col-md-6">
          <ejs-dropdownlist
            [(ngModel)]="orderData.ShipName"
            name="ShipName"
            placeholder="ShipName"
            [dataSource]="productionCityData"
          >
          </ejs-dropdownlist>
        </div>
      </div>
    </ng-template>
  </ejs-grid>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'grid';
  public editOption: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: 'Dialog',
  };
  public toolbarOption: ToolbarItems[] = [
    'Add',
    'Edit',
    'Delete',
    'Update',
    'Cancel',
  ];
  public deParams: IEditCell = { params: { value: '' } };
  public orderData: object;
  public val: any;
  public Intl: Internationalization = new Internationalization();

  actionBegin(args: SaveEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      const Validity = 'Validity';
      args.data[Validity] = this.orderData[Validity];
    }
  }
  public dateformatter = (value: any) => {
    let dFormatter: Function = this.Intl.getDateFormat({
      skeleton: 'y',
      type: 'date',
    });
    return dFormatter(new Date(value));
  };
  public valueAccess = (field: string, value: object, column: object) => {
    this.val =
      this.dateformatter(new Date(value[field][0])) +
      ' -' +
      this.dateformatter(new Date(value[field][1]));
    return this.val;
  };

  public data: object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier',
      ShipCity: 'Reims',
      ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ',
      ShipPostalCode: '51100',
      ShipCountry: 'France',
      Freight: 32.38,
      Verified: !0,
      Validity: [new Date(2020, 2, 2), new Date(2023, 7, 10)],
    },
    {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      EmployeeID: 6,
      OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten',
      ShipCity: 'Münster',
      ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ',
      ShipPostalCode: '44087',
      ShipCountry: 'Germany',
      Freight: 11.61,
      Verified: !1,
      Validity: [new Date(2020, 2, 2), new Date(2023, 7, 10)],
    },
    {
      OrderID: 10250,
      CustomerID: 'HANAR',
      EmployeeID: 4,
      OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes',
      ShipCity: 'Rio de Janeiro',
      ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ',
      ShipPostalCode: '05454-876',
      ShipCountry: 'Brazil',
      Freight: 65.83,
      Verified: !0,
      Validity: [new Date(2020, 2, 2), new Date(2023, 7, 10)],
    },
  ];
  public productionCityData = DataUtil.distinct(this.data, 'ShipName', true);
}
