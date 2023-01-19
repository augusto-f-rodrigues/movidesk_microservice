import { PartialType } from '@nestjs/mapped-types';
import { CreateMovideskDto } from './create-movidesk.dto';

export class UpdateMovideskDto extends PartialType(CreateMovideskDto) {}
