import { Component } from '@angular/core';
import {
  EditSettingsModel,
  IEditCell,
  ToolbarItems,
  SaveEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { Internationalization } from '@syncfusion/ej2-base';

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
        editType="numericedit"
        width="50"
      ></e-column>
      <e-column
        field="CustomerID"
        headerText="Customer ID"
        editType="dropdownedit"
        [edit]="deParams"
        width="50"
      ></e-column>
      <e-column
        field="EmployeeID"
        headerText="Employee ID"
        editType="dropdownedit"
        [edit]="deParams"
        width="50"
        format="P"
      ></e-column>
      <e-column
        field="Validity"
        headerText="Validity Period"
        width="50"
        [valueAccessor]="valueAccess"
      >
        <ng-template #editTemplate>
          <ejs-daterangepicker [(value)]="orderData.Validity" format="yMd">
          </ejs-daterangepicker>
        </ng-template>
      </e-column>
      <e-column
        field="Freight"
        headerText="Freight"
        textAlign="Right"
        format="C2"
        editType="numericedit"
        width="50"
      ></e-column>
      <e-column
        field="OrderDate"
        headerText="Order Date"
        textAlign="Right"
        format="yMd"
        width="50"
      ></e-column>
    </e-columns>
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
}
