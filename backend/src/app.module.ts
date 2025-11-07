import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/item.model';
import { ItemModule } from './modules/items/items.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { Favorite } from './models/favorite.model';
import { Users } from './models/user.model';
import { Cart } from './models/cart.model';
import { Payment } from './models/payment.model';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "&4!0!BeNi@Ish#123*$!!"
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'beni@ish1',
      database: 'fashiq',
      entities: [Item, Favorite, Users, Cart, Payment, ],
      synchronize: true,
    }),
    ItemModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
