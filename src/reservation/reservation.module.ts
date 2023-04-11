import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ReservationSchema } from './schemas/reservation.schema';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Reservation', schema: ReservationSchema }]),
    MailerModule.forRoot({
      transport: {
        host:'smtp.gmail.com',
        auth:{
          user:'roadsterandry@gmail.com',
          pass:'nnsglztxrzikeorl'
        },
      },
    }

    ),
  ],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
