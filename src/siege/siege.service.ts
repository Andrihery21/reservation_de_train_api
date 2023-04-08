import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import * as mongoose from 'mongoose';
  import { Siege } from './schemas/siege.schema';
  
  import { Query } from 'express-serve-static-core';
  import { User } from '../auth/schemas/user.schema';
  
  @Injectable()
  export class SiegeService {
    constructor(
      @InjectModel(Siege.name)
      private siegeModel: mongoose.Model<Siege>,
    ) {}
  
    async findAll(query: Query): Promise<Siege[]> {
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
  
      const sieges = await this.siegeModel
        .find({ ...keyword })
        .limit(resPerPage)
        .skip(skip);
      return sieges;
    }
  
    async create(siege: Siege, user: User): Promise<Siege> {
      const data = Object.assign(siege, { user: user._id });
  
      const res = await this.siegeModel.create(data);
      return res;
    }
  
    async findById(id: string): Promise<Siege> {
      const isValidId = mongoose.isValidObjectId(id);
  
      if (!isValidId) {
        throw new BadRequestException('Please enter correct id.');
      }
  
      const siege = await this.siegeModel.findById(id);
  
      if (!siege) {
        throw new NotFoundException('Siege not found.');
      }
  
      return siege;
    }
  
    async updateById(id: string, siege: Siege): Promise<Siege> {
      return await this.siegeModel.findByIdAndUpdate(id, siege, {
        new: true,
        runValidators: true,
      });
    }
  
    async deleteById(id: string): Promise<Siege> {
      return await this.siegeModel.findByIdAndDelete(id);
    }
  }
  