import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  async signIn(email: string, password: string): Promise<TokenDto> {
    const user = await this.usersService.findOne(email)

    if (user) {
      const matched = await comparePassword(password, user.password)

      if (!matched) {
        throw new UnauthorizedException()
      }

      const payload = { sub: user.id, email: user.email }

      const accessToken = await this.jwtService.signAsync(payload)

      const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '2h'})
      
      return {
        access_token: accessToken,
        refresh_token: refreshToken
      }
    }

    throw new NotFoundException("User not found")
  }

  async reAuth(data: TokenDto) {
    const { email, password } = await this.checkRefreshToken(data)
    
    return this.signIn(email, password)
  }

  private async checkRefreshToken(data: TokenDto) {
    const refreshToken = data.refresh_token;

    if (!refreshToken) {
      throw new NotFoundException('User not found');
    }

    const email = this.jwtService.decode(refreshToken)['email'];
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    try {
      await this.jwtService.verifyAsync(refreshToken);
      return user;
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid Signature');
      }
      if (err.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token Expired');
      }
      throw new UnauthorizedException(err.name);
    }
  }

  }
