/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Menu } from "./menu.model";

export type UserDocument = User & Document;
@Schema({
     // timestamp: true
})

export class User {

    first_name: string;
    second_name: string;
    last_name: string;
    slast_name: string;
    phone: string;
    email: string;
    dpi: string;
    address: string;
    profile_type: string;
    menu: Menu[];
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);