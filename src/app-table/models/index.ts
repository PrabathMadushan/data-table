export interface ITableColumn {
  id: string;
  title: string;
  timeSlots?: ITableCellValue[];
}

export interface ITableRow {
  id: string;
  height: number;
}

export interface ICell {
  value: JSX.Element;
  column: number;
  row: number;
  header: boolean;
}

export interface ITableData {
  columns: ITableColumn[];
}

export interface ITableCellValue {
  fromInMinutes: number;
  toInMinutes: number;
}
