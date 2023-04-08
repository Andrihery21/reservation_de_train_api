import {
    IsEmpty,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  import { User } from '../../auth/schemas/user.schema';
  
  
  export class CreateSiegeDto {
    @IsNotEmpty()
    @IsString()
    readonly nom: string;
  
    @IsNotEmpty()
    @IsString()
    readonly trajet: string;
  
    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
  }
  