import { Test, TestingModule } from '@nestjs/testing';
import { SiegeController } from './siege.controller';

describe('SiegeController', () => {
  let controller: SiegeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiegeController],
    }).compile();

    controller = module.get<SiegeController>(SiegeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
