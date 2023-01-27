import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class ResponsedBy {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class Item {
  @IsOptional()
  personId: string | number;
  @IsOptional()
  clientId: string | number;
  @IsOptional()
  team: string | number;
  @IsString()
  @IsOptional()
  customFieldItem: string;
}

class CreatedBy5 {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class ParentTicket {
  @IsNumber()
  @IsOptional()
  id: number;
  @IsString()
  @IsOptional()
  subject: string;
  @IsBoolean()
  @IsOptional()
  isDeleted: boolean;
}

class ChildrenTicket {
  @IsNumber()
  @IsOptional()
  id: number;
  @IsString()
  @IsOptional()
  subject: string;
  @IsBoolean()
  @IsOptional()
  isDeleted: boolean;
}

class CreatedBy4 {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsOptional()
  email: string | number;
  @IsOptional()
  phone: string | number;
  @IsOptional()
  address: string | number;
  @IsOptional()
  complement: string | number;
  @IsOptional()
  cep: string | number;
  @IsOptional()
  city: string | number;
  @IsOptional()
  bairro: string | number;
  @IsNumber()
  @IsOptional()
  number: string | number;
  @IsOptional()
  reference: string | number;
}

class CreatedBy2 {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class CreatedByTeam {
  @IsNumber()
  @IsOptional()
  id: number;
  @IsString()
  @IsOptional()
  name: string;
}

class CreatedBy3 {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class Organization {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class Owner {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class CreatedBy {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class SlaSolutionChangedBy {
  @IsString()
  @IsOptional()
  id: string;
  @IsNumber()
  @IsOptional()
  personType: number;
  @IsNumber()
  @IsOptional()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
}

class Client {
  @IsString()
  id: string;
  @IsNumber()
  personType: number;
  @IsNumber()
  profileType: number;
  @IsString()
  @IsOptional()
  businessName: string;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
  @IsBoolean()
  @IsOptional()
  isDeleted: boolean;
  @IsObject()
  @Type(() => Organization)
  @IsOptional()
  organization: Organization;
}

class Action {
  @IsNumber()
  id: number;
  @IsNumber()
  type: number;
  @IsNumber()
  @IsOptional()
  origin: number;
  @IsString()
  description: string;
  @IsString()
  @IsOptional()
  status: string;
  @IsString()
  @IsOptional()
  justification: string;
  @IsString()
  createdDate: string;
  @IsObject()
  @Type(() => CreatedBy2)
  createdBy: CreatedBy2;
  @IsBoolean()
  @IsOptional()
  isDeleted: boolean;
  @ValidateNested()
  @IsArray()
  @Type(() => TimeAppointment)
  @IsOptional()
  timeAppointments: TimeAppointment[];
  @ValidateNested()
  @IsArray()
  @Type(() => Expense)
  @IsOptional()
  expenses: Expense[];
  @ValidateNested()
  @IsArray()
  @Type(() => Attachment)
  @IsOptional()
  attachments: Attachment[];
  @ValidateNested()
  @IsArray()
  @Type(() => ParentTicket)
  @IsOptional()
  parentTickets: ParentTicket[];
  @ValidateNested()
  @IsArray()
  @Type(() => ChildrenTicket)
  @IsOptional()
  childrenTickets: ChildrenTicket[];
  @ValidateNested()
  @IsArray()
  @Type(() => SatisfactionSurveyResponse)
  @IsOptional()
  satisfactionSurveyResponses: SatisfactionSurveyResponse[];
  @ValidateNested()
  @IsArray()
  @Type(() => CustomFieldValue)
  @IsOptional()
  customFieldValues: CustomFieldValue[];
}

class TimeAppointment {
  @IsNumber()
  id: number;
  @IsString()
  activity: string;
  @IsString()
  date: string;
  @IsString()
  periodStart: string;
  @IsString()
  periodEnd: string;
  @IsString()
  workTime: string;
  @IsNumber()
  @IsOptional()
  accountedTime: number;
  @IsString()
  workTypeName: string;
  @IsObject()
  @Type(() => CreatedBy3)
  createdBy: CreatedBy3;
  @IsObject()
  @Type(() => CreatedByTeam)
  createdByTeam: CreatedByTeam;
}

class Expense {
  @IsNumber()
  @IsOptional()
  id: number;
  @IsString()
  type: string;
  @IsString()
  @IsOptional()
  serviceReport: string;
  @IsObject()
  @Type(() => CreatedBy4)
  createdBy: CreatedBy4;
  @IsOptional()
  createdByTeam: string | number;
  @IsString()
  @IsOptional()
  date: string;
  @IsOptional()
  quantity: string | number;
  @IsNumber()
  @IsOptional()
  value: number;
}

class Attachment {
  @IsString()
  @IsOptional()
  fileName: string;
  @IsString()
  @IsOptional()
  path: string;
  @IsObject()
  @Type(() => CreatedBy5)
  createdBy: CreatedBy5;
  @IsString()
  createdDate: string;
}

class SatisfactionSurveyResponse {
  @IsNumber()
  @IsOptional()
  id: number;
  @IsObject()
  @Type(() => ResponsedBy)
  @IsOptional()
  responsedBy: ResponsedBy;
  @IsString()
  @IsOptional()
  responseDate: string;
  @IsNumber()
  @IsOptional()
  satisfactionSurveyModel: number;
  @IsOptional()
  satisfactionSurveyNetPromoterScoreResponse: string | number;
  @IsOptional()
  satisfactionSurveyPositiveNegativeResponse: string | number;
  @IsNumber()
  @IsOptional()
  satisfactionSurveySmileyFacesResponse: number;
  @IsString()
  @IsOptional()
  comments: string;
}

class CustomFieldValue {
  @IsNumber()
  @IsOptional()
  customFieldId: number;
  @IsNumber()
  @IsOptional()
  customFieldRuleId: number;
  @IsNumber()
  @IsOptional()
  line: number;
  @IsString()
  @IsOptional()
  value?: string;
  @ValidateNested()
  @IsArray()
  @Type(() => Item)
  @IsOptional()
  items: Item[];
}

export class CreateTicketDto {
  @IsNumber()
  @IsOptional()
  id: number;
  @IsString()
  @IsOptional()
  protocol: string;
  @IsNumber()
  type: number;
  @IsString()
  @IsOptional()
  subject: string;
  @IsString()
  @IsOptional()
  category: string;
  @IsString()
  @IsOptional()
  urgency: string;
  @IsString()
  @IsOptional()
  status: string;
  @IsString()
  @IsOptional()
  baseStatus: string;
  @IsString()
  @IsOptional()
  justification: string;
  @IsNumber()
  @IsOptional()
  origin: number;
  @IsString()
  createdDate: string;
  @IsString()
  @IsOptional()
  originEmailAccount: string;
  @IsObject()
  @Type(() => Owner)
  @IsOptional()
  owner: Owner;
  @IsString()
  @IsOptional()
  ownerTeam: string;
  @IsObject()
  @Type(() => Owner)
  createdBy: CreatedBy;
  @IsString()
  @IsOptional()
  serviceFull: string[];
  @IsNumber()
  @IsOptional()
  serviceFirstLevelId: number;
  @IsString()
  @IsOptional()
  serviceFirstLevel: string;
  @IsString()
  @IsOptional()
  serviceSecondLevel: string;
  @IsString()
  @IsOptional()
  serviceThirdLevel: string;
  @IsString()
  @IsOptional()
  contactForm: string;
  @IsString()
  @IsOptional()
  tags: string[];
  @IsString()
  @IsOptional()
  cc: string;
  @IsString()
  @IsOptional()
  resolvedIn: string;
  @IsString()
  @IsOptional()
  reopenedIn: string;
  @IsString()
  @IsOptional()
  closedIn: string;
  @IsString()
  @IsOptional()
  lastActionDate: string;
  @IsNumber()
  @IsOptional()
  actionCount: number;
  @IsString()
  @IsOptional()
  lastUpdate: string;
  @IsNumber()
  @IsOptional()
  lifeTimeWorkingTime: number;
  @IsNumber()
  @IsOptional()
  stoppedTime: number;
  @IsNumber()
  @IsOptional()
  stoppedTimeWorkingTime: number;
  @IsBoolean()
  @IsOptional()
  resolvedInFirstCall: boolean;
  @IsString()
  @IsOptional()
  chatWidget: string;
  @IsString()
  @IsOptional()
  chatGroup: string;
  @IsNumber()
  @IsOptional()
  chatTalkTime: number;
  @IsNumber()
  @IsOptional()
  chatWaitingTime: number;
  @IsNumber()
  @IsOptional()
  sequence: number;
  @IsString()
  @IsOptional()
  slaAgreement: string;
  @IsString()
  @IsOptional()
  slaAgreementRule: string;
  @IsNumber()
  @IsOptional()
  slaSolutionTime: number;
  @IsNumber()
  @IsOptional()
  slaResponseTime: number;
  @IsBoolean()
  @IsOptional()
  slaSolutionChangedByUser: boolean;
  @IsObject()
  @Type(() => SlaSolutionChangedBy)
  @IsOptional()
  slaSolutionChangedBy: SlaSolutionChangedBy;
  @IsString()
  @IsOptional()
  slaSolutionDate: string;
  @IsBoolean()
  @IsOptional()
  slaSolutionDateIsPaused: boolean;
  @IsString()
  @IsOptional()
  slaResponseDate: string;
  @IsString()
  @IsOptional()
  slaRealResponseDate: string;
  @ValidateNested()
  @IsArray()
  @Type(() => Client)
  clients: Client[];
  @ValidateNested()
  @IsArray()
  @Type(() => Action)
  actions: Action[];
}
