import { InjectModel } from "@nestjs/mongoose";
import { User } from "./model/user.schema";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserInput, UpdateUserInput } from "./model/user.input";
import { UserPayload } from "./model/user.payload";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(body: CreateUserInput): Promise<UserPayload> {
        const createdUser = new this.userModel(body);
        const user = await createdUser.save();

        return user;
    }

    async findUser(id: string): Promise<UserPayload> {
        const user = await this.userModel.findOne({ _id: id });

        if (!user) {
            throw new NotFoundException(`User with id:${id} not found`);
        }

        return user;
    }

    async findUserByUsername(username: string): Promise<UserPayload> {
        const user = await this.userModel.findOne({ username: username });

        if (!user) {
            throw new NotFoundException(`User with username:${username} not found`);
        }

        return user;
    }

    async listUsers(): Promise<UserPayload[]> {
        const users = await this.userModel.find();
        return users;
    }

    async updateUser(id: string, body: UpdateUserInput): Promise<UserPayload> {
        await this.userModel.updateOne({ _id: id }, body);
        const updatedUser = this.userModel.findById(id);

        return updatedUser;
    }

    async deleteUser(id: string): Promise<void> {
        await this.userModel.deleteOne({ _id: id });
    }
}