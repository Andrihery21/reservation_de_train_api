import {
    IsEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { User } from '../../auth/schemas/user.schema';
 
  
  export class UpdateSiegeDto {
    @IsOptional()
    @IsString()
    readonly nom: string;
  
    @IsOptional()
    @IsString()
    readonly trajet: string;
  
  
    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
  }
  