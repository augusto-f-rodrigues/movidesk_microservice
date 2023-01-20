declare namespace Movidesk {
  interface TicketResponse {
    id: number;
    protocol: string;
    type: number;
    subject: string;
    category: string;
    urgency: string;
    status: string;
    baseStatus: string;
    justification: string;
    origin: number;
    createdDate: string;
    originEmailAccount: string;
    owner: Owner;
    ownerTeam: string;
    createdBy: CreatedBy;
    serviceFull: string[];
    serviceFirstLevelId: number;
    serviceFirstLevel: string;
    serviceSecondLevel: string;
    serviceThirdLevel: string;
    contactForm: string;
    tags: string[];
    cc: string;
    resolvedIn: string;
    reopenedIn: string;
    closedIn: string;
    lastActionDate: string;
    actionCount: number;
    lastUpdate: string;
    lifeTimeWorkingTime: number;
    stoppedTime: number;
    stoppedTimeWorkingTime: number;
    resolvedInFirstCall: boolean;
    chatWidget: string;
    chatGroup: string;
    chatTalkTime: number;
    chatWaitingTime: number;
    sequence: number;
    slaAgreement: string;
    slaAgreementRule: string;
    slaSolutionTime: number;
    slaResponseTime: number;
    slaSolutionChangedByUser: boolean;
    slaSolutionChangedBy: SlaSolutionChangedBy;
    slaSolutionDate: string;
    slaSolutionDateIsPaused: boolean;
    slaResponseDate: string;
    slaRealResponseDate: string;
    clients: Client[];
    actions: Action[];
    customFieldValues: CustomFieldValue[];
  }

  interface Owner {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface CreatedBy {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface SlaSolutionChangedBy {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface Client {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
    isDeleted: boolean;
    organization: Organization;
  }

  interface Organization {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface Action {
    id: number;
    type: number;
    origin: number;
    description: string;
    status: string;
    justification: string;
    createdDate: string;
    createdBy: CreatedBy2;
    isDeleted: boolean;
    timeAppointments: TimeAppointment[];
    expenses: Expense[];
    attachments: Attachment[];
    parentTickets: ParentTicket[];
    childrenTickets: ChildrenTicket[];
    satisfactionSurveyResponses: SatisfactionSurveyResponse[];
    customFieldValues: CustomFieldValue[];
  }

  interface CreatedBy2 {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface TimeAppointment {
    id: number;
    activity: string;
    date: string;
    periodStart: string;
    periodEnd: string;
    workTime: string;
    accountedTime: number;
    workTypeName: string;
    createdBy: CreatedBy3;
    createdByTeam: CreatedByTeam;
  }

  interface CreatedBy3 {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface CreatedByTeam {
    id: number;
    name: string;
  }

  interface Expense {
    id: number;
    type: string;
    serviceReport: string;
    createdBy: CreatedBy4;
    createdByTeam: any;
    date: string;
    quantity: any;
    value: number;
  }

  interface CreatedBy4 {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: any;
    phone: any;
    address: any;
    complement: any;
    cep: any;
    city: any;
    bairro: any;
    number: any;
    reference: any;
  }

  interface Attachment {
    fileName: string;
    path: string;
    createdBy: CreatedBy5;
    createdDate: string;
  }

  interface CreatedBy5 {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface ParentTicket {
    id: number;
    subject: string;
    isDeleted: boolean;
  }

  interface ChildrenTicket {
    id: number;
    subject: string;
    isDeleted: boolean;
  }

  interface SatisfactionSurveyResponse {
    id: number;
    responsedBy: ResponsedBy;
    responseDate: string;
    satisfactionSurveyModel: number;
    satisfactionSurveyNetPromoterScoreResponse: any;
    satisfactionSurveyPositiveNegativeResponse: any;
    satisfactionSurveySmileyFacesResponse: number;
    comments: string;
  }

  interface ResponsedBy {
    id: string;
    personType: number;
    profileType: number;
    businessName: string;
    email: string;
    phone: string;
  }

  interface CustomFieldValue {
    customFieldId: number;
    customFieldRuleId: number;
    line: number;
    value?: string;
    items: Item[];
  }

  interface Item {
    personId: any;
    clientId: any;
    team: any;
    customFieldItem: string;
  }
}
