import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/adminmodule.module';
import { SellerModule } from './sellerfile/seller.module';
import { ModeratorModule } from './moderatorfile/moderator.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [AdminModule , SellerModule,ModeratorModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'containers-us-west-44.railway.app',
     port: 6546,
     username: 'postgres',
     password: 'l5O8NBeoep5uWNxhsdFp',
     database: 'railway',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),

 ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
    serveRoot: '/public/' //last slash was important
  }),

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}