import { ResPonsData } from 'src/global/globalClass';
import { ProductService } from './product.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Body,
  ValidationPipe,
  UseGuards 
} from '@nestjs/common';
import { HttpMessage, Httpstatus } from 'src/global/globalEnum';
import { ProductModel } from 'src/model/product.model';
import { Product } from './product.entity';
import { ProductDto } from './create-product.dto';
import { UpdateResult } from 'typeorm';
import { Roles } from 'src/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @HttpCode(203)
  @Get()
  @UseGuards(RolesGuard)
  @Roles(['admin'])
  async GetProduct(): Promise<ResPonsData<ProductModel[]>> {
    try {
      return new ResPonsData<ProductModel[]>(
        await this.productService.findAll(),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<ProductModel[]>(
        await this.productService.findAll(),
        Httpstatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  @Roles(['admin'])
  async CreatedProduct(@Body(new ValidationPipe) ProductDto: ProductDto): Promise<ResPonsData<ProductDto>> {
    try {
      return new ResPonsData<ProductDto>(
       await this.productService.CreatedProduct(ProductDto),
        Httpstatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<ProductDto>(
        ProductDto,
        Httpstatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Get(':id')
  async detailProduct(@Param('id') id: string) : Promise<ResPonsData<Product>> {
    try {
      return new  ResPonsData<Product>(
        await  this.productService.findOne(id),
        Httpstatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new  ResPonsData<Product>(
        await this.productService.findOne(id),
        Httpstatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put(':id')
  async updateProduct(@Param('id') id: string ,@Body(new ValidationPipe) ProductDto: ProductDto ): Promise<ResPonsData<any>> {
    try {
      return new ResPonsData<any>(
       await this.productService.updateProduct(id ,ProductDto ),
        Httpstatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<any>(
        await this.productService.updateProduct(id ,ProductDto ),
        Httpstatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete(':id')
 async deleteProduct(@Param('id') id: string):  Promise<ResPonsData<void>> {
    try {
      return new ResPonsData<void>(
        await this.productService.remove(id),
        Httpstatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<void>(
        await this.productService.remove(id),
        Httpstatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
