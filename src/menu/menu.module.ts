import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './menu.model';
import { User, UserSchema } from './user.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Menu.name, schema: MenuSchema },
        { name: User.name, schema: UserSchema }
      ]
    )
  ],
  providers: [MenuService],
  controllers: [MenuController]
})
export class MenuModule {}
