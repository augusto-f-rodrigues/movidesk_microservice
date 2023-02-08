export class TicketFilterDto {
  search: Search;
  return: Return;
}

interface Search {
  customFieldValues: Record<CustomFieldValuesKey, string | boolean>[];
  normalFieldValues: Record<NormalFieldValuesKey, Value | StorageFileGuid | CustomFieldItem>
}

interface Return {
  customFieldValues: Record<CustomFieldValuesKey, Value | StorageFileGuid | CustomFieldItem>[];
  normalFieldValues: Record<NormalFieldValuesKey, string>
}


type NormalFieldValuesKey = 'name';

type CustomFieldValuesKey = number;

type Value = boolean | string;
type StorageFileGuid = boolean
type CustomFieldItem = string;

/* 
  {
  search: {
    customFieldValues: [
      18480: {
        "customFieldItem": "Teclado"
      },
      18485: {
        "storageFileGuid": true
      },
      19480: {
        "value": "Teclado"
      },
    ],
    normalFieldValues: {}
  },
  return: {}
}
*/