import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ReservationSchema } from './schemas/reservation.schema';
@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Reservation', schema: ReservationSchema }]),
  ],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
