import { Injectable } from '@nestjs/common';
import { ItemInterface } from './Interfaces'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<ItemInterface>) {}

    findAll(): Promise<ItemInterface[]> {
        return this.itemModel.find({});
    }

    findOne(id: string): Promise<ItemInterface> {
        return this.itemModel.findOne({ _id: id })
    }

    create(item: ItemInterface): Promise<ItemInterface> {
        let newItem = new this.itemModel(item)
        return newItem.save()
    }

    delete(id: string): Promise<ItemInterface> {
        return this.itemModel.findByIdAndRemove(id);
    }

    update(id: string, item: ItemInterface): Promise<ItemInterface> {
        return this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
}
