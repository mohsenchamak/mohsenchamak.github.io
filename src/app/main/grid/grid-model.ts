export interface GridModel {
  data: DataObject
  success?: boolean;
  message?: string;
  messageId?: string;
  messageType?: number;
}

export interface DataObject {
  columns: Array<Columns>;
  data: Array<ListData>;
}

export interface Columns {
  field: string;
  header: string;
  hasHeader: boolean;
  display: boolean;
  isColumn: boolean;
  editable: boolean;
  editableInView: boolean;
  controlType: number;
  valueType: number;
  displayFormat: number;
  thStyle: string;
  tdStyle: string;
  thClass: string;
  tdClass: string;
  options: string;
  execStr: string;
  hasTotal: boolean;
  onChangeEvent: string;
  minLength: number;
  maxLength: number;
}

export interface ListData {
  id: string;
  radif: string;
  date: string;
  description: string;
  subject: string;
  workflowSchemeId: string;
  workflowProcessInstanceId: string;
  stateName: string;
  identityName: string;
  CUSR28005: string;
  CUSR28006: string;
  RUSR28007: string;
  RUSR28008: string;
  RUSR28007_title: string;
  RUSR28008_title: string;
}
