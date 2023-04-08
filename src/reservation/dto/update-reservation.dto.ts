import {
    IsEmpty,
    IsDate,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { User } from '../../auth/schemas/user.schema';
  
  
  export class UpdateReservationDto {
    @IsOptional()
    @IsString()
    readonly trajet: string;
  
    @IsOptional()
    @IsString()
    readonly siege: string;
  
    @IsOptional()
    @IsDate()
    readonly date: Date;  
  
    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
  }
  