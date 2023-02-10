declare namespace Ticket {
  interface Search {
    customFieldValues: Record<CustomFieldId, Record<Options, Value>>[];
  }

  type CustomFieldId = string;
  type Options = 'value' | 'storageFileGuid' | 'customFieldItem';
  type Value = boolean | string;
}
