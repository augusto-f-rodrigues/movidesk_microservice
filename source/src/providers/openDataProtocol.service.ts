import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OpenDataProtocolService {
  private readonly logger = new Logger(OpenDataProtocolService.name);

  constructor() {}

  /* 
    &$select=id,status,category,createdDate&$filter=status eq 'S4 - COLETA REVERSA' and category eq 'Garantia'

    ----------------------------------------------------------------------

    "normalFieldValues": [
      {
        "name": string,
        "value": string
      } 
    ]
  */

  async formatNormalFieldValues(normalFields: Array<any>) {
    // retornar falso para finalizar operação antes da requisição http
    if (!normalFields) return;

    let query: string;
    let selectQuery: Array<string> = [];
    let filterQuery: Array<string> = [];

    normalFields.forEach((element) => {
      if (element?.name && element?.value) {
        selectQuery.push(`${element.name}`);
        filterQuery.push(`${element.name} eq '${element.value}'`);
      } else if (element?.name) {
        selectQuery.push(`${element.name}`);
      }
    });

    filterQuery
      ? (query = `&$select=${selectQuery.join(',')}&$filter=${
          filterQuery.length > 1 ? filterQuery.join(' and ') : filterQuery[0]
        }`)
      : (query = `&$select=${selectQuery.join(',')}`);

    return query;
  }
}

