import { Test, TestingModule } from '@nestjs/testing';
import { SiegeService } from './siege.service';

describe('SiegeService', () => {
  let service: SiegeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiegeService],
    }).compile();

    service = module.get<SiegeService>(SiegeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
