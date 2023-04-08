import { Module } from '@nestjs/common';
import { SiegeController } from './siege.controller';
import { SiegeService } from './siege.service';

@Module({
  controllers: [SiegeController],
  providers: [SiegeService]
})
export class SiegeModule {}
