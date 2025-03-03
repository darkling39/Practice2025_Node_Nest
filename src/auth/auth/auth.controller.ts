import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  @Post('register')
  async register(@Body() body) {
    return this.authService.register(body.username, body.password);
  }
}