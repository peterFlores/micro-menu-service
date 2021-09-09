import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private readonly service: MenuService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Post()
    async create(@Body() model: Menu) {
        return await this.service.create(model);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model: Menu) {
        return await this.service.update(id, model);
    }
    @Delete(':id')
    async delete (@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
