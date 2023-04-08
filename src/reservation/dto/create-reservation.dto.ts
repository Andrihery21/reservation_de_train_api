import {
    IsEmpty,
    IsNotEmpty,
    IsString,
    IsDate
  } from 'class-validator';
  import { User } from '../../auth/schemas/user.schema';
 
export class CreateReservationDto {
    @IsNotEmpty()
    @IsString()
    readonly trajet: string;
  
    @IsNotEmpty()
    @IsString()
    readonly description: string;
  
    @IsNotEmpty()
    @IsString()
    readonly siege: string;
  
    @IsNotEmpty()
    @IsDate()
    readonly date: Date;

  
    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
  }