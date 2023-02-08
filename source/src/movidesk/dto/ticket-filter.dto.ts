export class TicketFilterDto {
  search: Search;
}

interface Search {
  customFieldValues: Record<string, Record<string, string | boolean>>[];
}

type CustomFieldId = string;
type Options = 'value' | 'storageFileGuid' | 'customFieldItem';
type Value = boolean | string;
