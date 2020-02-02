import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ItemSchema } from './Schema'

import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule {}
