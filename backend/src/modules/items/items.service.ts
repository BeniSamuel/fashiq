import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemDto } from "src/dtos/item.dto";
import { Item } from "src/models/item.model";
import { Repository } from "typeorm";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>
  ) {}

  async getAllItems (): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async getItemById (id: number): Promise<Item> {
    return await this.itemRepository.findOne({ where: {id}});
  }

  async createProduct (itemDto: ItemDto): Promise<Item> {
   const newItem = new Item(itemDto.name, itemDto.description, itemDto.rating, itemDto.price, itemDto.size, itemDto.color);
   return this.itemRepository.save(newItem);
  }
}
