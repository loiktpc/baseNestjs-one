import { Module ,NestModule, MiddlewareConsumer , RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {Product} from './modules/products/product.entity'
import { LogginMiddleware } from './Middleware/loggin.middleware';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestbeone',
    entities: [Product],
    synchronize: true,
    autoLoadEntities: true,
  }), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogginMiddleware)
      .forRoutes({ path: 'product', method: RequestMethod.GET });
     consumer
      .apply(LogginMiddleware) 
      .forRoutes({ path: 'other-route', method: RequestMethod.POST }); 
  }
  
  constructor(private dataSource: DataSource) {
  }

}
