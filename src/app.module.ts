import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ReservationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
