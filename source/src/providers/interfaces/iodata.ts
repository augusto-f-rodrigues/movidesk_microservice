export interface IOData {

  formatNormalFieldValues(data: Array<any>): Promise<string>

  formatCustomFieldValues(data: Array<any>): Promise<string>

}