export interface FormModel {
  id: string,
  folderId: number,
  date: string,
  subject: string,
  description: string,
  dynamicParams: [
    {
      name: string,
      value: string,
    },
    {
      name: string,
      value: string,
    },
    {
      name: string,
      value: string,
    },
    {
      name: string,
      value: string,
    },
  ],
  workflowSchemeId: number,
  workflowInboxId: string,
}

export interface OptionsModel {
  data: OptionListData[];
  message: null;
  messageId: null;
  messageType: 0;
  success: true;
}
export interface OptionListData {
  code: string;
  parentId: string;
  text: string;
  value: string;
}
