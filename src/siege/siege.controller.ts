import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import { SiegeService } from './siege.service';
  import { CreateSiegeDto } from './dto/create-siege.dto';
  import { UpdateSiegeDto } from './dto/update-siege.dto';
  import { Siege } from './schemas/siege.schema';
  
  import { Query as ExpressQuery } from 'express-serve-static-core';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('sieges')
  export class SiegeController {
    constructor(private siegeService: SiegeService) {}
  
    @Get()
    async getAllSieges(@Query() query: ExpressQuery): Promise<Siege[]> {
      return this.siegeService.findAll(query);
    }
  
    @Post()
    @UseGuards(AuthGuard())
    async createSiege(
      @Body()
      siege: CreateSiegeDto,
      @Req() req,
    ): Promise<Siege> {
      return this.siegeService.create(siege, req.user);
    }
  
    @Get(':id')
    async getSiege(
      @Param('id')
      id: string,
    ): Promise<Siege> {
      return this.siegeService.findById(id);
    }
  
    @Put(':id')
    async updateSiege(
      @Param('id')
      id: string,
      @Body()
      siege: UpdateSiegeDto,
    ): Promise<Siege> {
      return this.siegeService.updateById(id, siege);
    }
  
    @Delete(':id')
    async deleteSiege(
      @Param('id')
      id: string,
    ): Promise<Siege> {
      return this.siegeService.deleteById(id);
    }
  }
  