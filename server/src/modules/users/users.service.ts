import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  
  async create(user: CreateUserDto) {
    const { email, name, password, user_type } = user

    const pass = await encodePassword(password)

    const { id } = await this.prisma.user.create({ data: { ...user, password: pass } })

    return {
      id,
      email,
      name,
      user_type
    }
  }

  async findOne(email: string) {
    const user = await this.prisma.user.findFirst({where: { email }})
    
    return user
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } })

    return { message: "User removed successfully" }
  }
}
