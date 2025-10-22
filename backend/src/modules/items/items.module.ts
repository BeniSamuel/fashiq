import { Module } from "@nestjs/common";
import { ItemService } from "./items.service";
import { ItemController } from "./items.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Item } from "src/models/item.model";

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
