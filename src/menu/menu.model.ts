import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;
@Schema({
     // timestamp: true
})

export class Menu {

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    path: string;

    @Prop()
    image: string;

    @Prop()
    status: boolean;

}

export const MenuSchema = SchemaFactory.createForClass(Menu);
