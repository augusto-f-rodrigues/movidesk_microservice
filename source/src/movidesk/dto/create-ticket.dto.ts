import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

class CreatedBy2 {
  @IsNumber()
  id: number;
}

class CreatedBy {
  @IsString()
  id: number;
}

class Client {
  @IsString()
  id: number;
}

class Action {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNumber()
  type: 1 | 2;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  createdDate?: string;

  @IsObject()
  @Type(() => CreatedBy2)
  createdBy: CreatedBy2;
}

export class CreateTicketDto {
  @IsNumber()
  type: 1 | 2;

  @IsString()
  @IsOptional()
  subject?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  urgency?: string;

  @ValidateIf((e) => e.justification != null)
  @IsString()
  @IsOptional()
  status?: string;

  @ValidateIf((e) => e.status != null)
  @IsString()
  @IsOptional()
  justification?: string;

  @IsString()
  @IsOptional()
  createdDate?: string;

  @IsObject()
  @Type(() => CreatedBy)
  createdBy: CreatedBy;

  @ValidateNested()
  @IsArray()
  @Type(() => Client)
  clients: Client[];

  @ValidateNested()
  @IsArray()
  @Type(() => Action)
  actions: Action[];
}
