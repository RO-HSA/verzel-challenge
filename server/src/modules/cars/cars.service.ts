import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarDto) {
    const car = await this.prisma.car.create({ data })

    return car
  }

  async findAll() {
    const allCars = await this.prisma.car.findMany()

    return allCars
  }

  async findOne(id: string) {
    const car = await this.prisma.car.findFirst({ where: { id } })

    return car
  }

  async update(id: string, data: UpdateCarDto) {
    const carExists = await this.prisma.car.findUnique({ where: { id } })

    if (!carExists) {
      throw new Error("Car does not exists")
    }

    return await this.prisma.car.update({
      data: {
        ...data
      },
      where: {
        id
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.car.delete({
      where: {
        id
      }
    })
  }
}
