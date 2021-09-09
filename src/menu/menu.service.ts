import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from './menu.model';

@Injectable()
export class MenuService {
    constructor
        (@InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>) {}

    async findAll(): Promise<Menu[]> {
        return await this.menuModel.find().exec();
    }

    async findOne(id: string): Promise<Menu> {
        return await this.menuModel.findById(id).exec();
    }

    async create(menu: Menu): Promise<Menu> {
        return await new this.menuModel(menu).save();
    }

    async update(id: string, Menu: Menu): Promise<Menu> {
        return await this.menuModel.findByIdAndUpdate(id, Menu).exec();
    }

    async delete(id: string): Promise<Menu> {
        return await this.menuModel.findByIdAndDelete(id).exec();
    }
}
