import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findUserByUsername(username);
        if (user && user.password === pass) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        console.log(user);
        const payload = { username: user.username, sub: user._id };

        console.log(payload);

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
