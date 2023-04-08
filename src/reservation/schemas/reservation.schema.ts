import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';



@Schema({
  timestamps: true,
})
export class Reservation {
  @Prop()
  trajet: string;

  @Prop()
  siege: string;

  @Prop()
  date: Date;



  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);