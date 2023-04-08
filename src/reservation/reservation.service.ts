import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import * as mongoose from 'mongoose';
  import { Reservation } from './schemas/reservation.schema';
  
  import { Query } from 'express-serve-static-core';
  import { User } from '../auth/schemas/user.schema';
  
  @Injectable()
  export class ReservationService {
    constructor(
      @InjectModel(Reservation.name)
      private reservationModel: mongoose.Model<Reservation>,
    ) {}
  
    async findAll(query: Query): Promise<Reservation[]> {
      const resPerPage = 2;
      const currentPage = Number(query.page) || 1;
      const skip = resPerPage * (currentPage - 1);
  
      const keyword = query.keyword
        ? {
            title: {
              $regex: query.keyword,
              $options: 'i',
            },
          }
        : {};
  
      const reservations = await this.reservationModel
        .find({ ...keyword })
        .limit(resPerPage)
        .skip(skip);
      return reservations;
    }
  
    async create(reservation: Reservation, user: User): Promise<Reservation> {
      const data = Object.assign(reservation, { user: user._id });
  
      const res = await this.reservationModel.create(data);
      return res;
    }
  
    async findById(id: string): Promise<Reservation> {
      const isValidId = mongoose.isValidObjectId(id);
  
      if (!isValidId) {
        throw new BadRequestException('Please enter correct id.');
      }
  
      const reservation = await this.reservationModel.findById(id);
  
      if (!reservation) {
        throw new NotFoundException('Reservation not found.');
      }
  
      return reservation;
    }
  
    async updateById(id: string, reservation: Reservation): Promise<Reservation> {
      return await this.reservationModel.findByIdAndUpdate(id, reservation, {
        new: true,
        runValidators: true,
      });
    }
  
    async deleteById(id: string): Promise<Reservation> {
      return await this.reservationModel.findByIdAndDelete(id);
    }
  }
  
