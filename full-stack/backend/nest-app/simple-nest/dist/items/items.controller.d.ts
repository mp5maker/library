import { ItemDto } from './Dto';
import { ItemsService } from './items.service';
import { ItemInterface } from './Interfaces';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<ItemInterface[]>;
    findOne(id: any): Promise<ItemInterface>;
    create(createItemDto: ItemDto): Promise<ItemInterface>;
    delete(id: any): Promise<ItemInterface>;
    update(updateItemDto: ItemDto, id: any): Promise<ItemInterface>;
}
