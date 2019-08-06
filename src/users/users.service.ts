import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface'

@Injectable()
export class UsersService {

  findOneByEmail(email: string) {
    console.log(email);
    return "success";
  }

}