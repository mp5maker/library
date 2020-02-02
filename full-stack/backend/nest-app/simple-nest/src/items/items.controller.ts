import { Controller, Get, Post, Put,  Patch, Delete, Body, Req, Res, Param  } from '@nestjs/common';
import { Request, Response } from 'express'

/* Data Transfer Object */
import { ItemDto } from './Dto'

/* Item Service */
import { ItemsService } from './items.service'
import { ItemInterface } from './Interfaces'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<ItemInterface[]> {
        return await this.itemsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<ItemInterface> {
        return await this.itemsService.findOne(id)
    }

    @Post()
    async create(@Body() createItemDto: ItemDto): Promise<ItemInterface> {
        return await this.itemsService.create(createItemDto)
    }

    @Delete(":id")
    async delete(@Param('id') id): Promise<ItemInterface> {
        return await this.itemsService.delete(id)
    }

    @Patch(":id")
    async update(@Body() updateItemDto: ItemDto, @Param('id') id): Promise<ItemInterface> {
        return await this.itemsService.update(id, updateItemDto)
    }
}
