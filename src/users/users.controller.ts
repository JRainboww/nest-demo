import { Controller, Get, UseGuards, Request, Post, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
}
