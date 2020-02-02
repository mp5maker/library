import { ItemInterface } from './Interfaces';
import { Model } from 'mongoose';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<ItemInterface>);
    findAll(): Promise<ItemInterface[]>;
    findOne(id: string): Promise<ItemInterface>;
    create(item: ItemInterface): Promise<ItemInterface>;
    delete(id: string): Promise<ItemInterface>;
    update(id: string, item: ItemInterface): Promise<ItemInterface>;
}
