import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { SiegeController } from './siege.controller';
import { SiegeService } from './siege.service';
import { SiegeSchema } from './schemas/siege.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Siege', schema: SiegeSchema }]),
  ],
  controllers: [SiegeController],
  providers: [SiegeService],
})
export class SiegeModule {}
