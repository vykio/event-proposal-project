import { Injectable } from '@nestjs/common';
import { UserPayload } from 'src/user/model/user.payload';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findUserByUsername(username);
        if (user && user.password === pass) {
            return user;
        }
        return null;
    }
}
