import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserInput } from "./model/user.input";

@Controller({
    path: 'users',
    version: '1',
})
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() body: CreateUserInput) {
        return this.userService.createUser(body);
    }

    @Get('/list')
    listUsers() {
        return this.userService.listUsers();
    }

    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findUser(id);
    }

    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() body: CreateUserInput) {
        return this.userService.updateUser(id, body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}