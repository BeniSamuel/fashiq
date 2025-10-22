import { Controller, Get } from "@nestjs/common";
import { ItemService } from "./items.service";
import { Item } from "src/models/item.model";

@Controller("/api/item")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get("/all")
  getAllItems(): Promise<Item[]> {
    return this.itemService.getAllItems();
  }
}
