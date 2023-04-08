import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';



@Schema({
  timestamps: true,
})
export class Siege {
  @Prop()
  nom: string;

  @Prop()
  trajet: string;

 

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const SiegeSchema = SchemaFactory.createForClass(Siege);
