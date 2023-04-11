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
  import { ReservationService } from './reservation.service';
  import { CreateReservationDto } from './dto/create-reservation.dto';
  import { UpdateReservationDto } from './dto/update-reservation.dto';
  import { Reservation } from './schemas/reservation.schema';
  
  import { Query as ExpressQuery } from 'express-serve-static-core';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('reservations')
  export class ReservationController {
    constructor(private reservationService: ReservationService) {}
  
    @Get()
    async getAllReservations(@Query() query: ExpressQuery): Promise<Reservation[]> {
      return this.reservationService.findAll(query);
    }
  
    @Post()
    @UseGuards(AuthGuard())
   async createReservation(
      @Body()
      reservation: CreateReservationDto,
      @Req() req,
    ): Promise<Reservation> {
       this.reservationService.sendMail();
       return this.reservationService.create(reservation, req.user);
    }
   
    
  
    @Get(':id')
    async getReservation(
      @Param('id')
      id: string,
    ): Promise<Reservation> {
      return this.reservationService.findById(id);
    }
  
    @Put(':id')
    async updateReservation(
      @Param('id')
      id: string,
      @Body()
      reservation: UpdateReservationDto,
    ): Promise<Reservation> {
      return this.reservationService.updateById(id, reservation);
    }
  
    @Delete(':id')
    async deleteReservation(
      @Param('id')
      id: string,
    ): Promise<Reservation> {
      return this.reservationService.deleteById(id);
    }
  }
  
