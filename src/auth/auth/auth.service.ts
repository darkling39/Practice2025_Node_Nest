import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return { username, password: hashedPassword };
  }

  async login(username: string, password: string) {
    const payload = { username };
    return { access_token: this.jwtService.sign(payload) };
  }
}