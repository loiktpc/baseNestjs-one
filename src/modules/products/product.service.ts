import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/model/product.model';
import {Product} from './product.entity'
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { ProductDto } from './create-product.dto';
@Injectable()
export class ProductService {
    private Products : ProductModel[] = [
        {id : 1 , name : 'iphone 12' , price : 8000000 , categoryid : '2'} ,
        {id : 1 , name : 'iphone 15' , price : 9000000 , categoryid : '2'}
    ]
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
      ) {}
    findAll(): Promise<Product[]> {        
        return this.productRepository.find();
    }
    async CreatedProduct(data :ProductDto): Promise<ProductDto> {
        const result = await this.productRepository.save(data);
        return result;
    }
   
     findOne(id: any): Promise<Product> {
        return  this.productRepository.findOneBy({ id });
      }
    
    
   async updateProduct(id: string , data : ProductDto):Promise<any>  {
    console.log('check id' , id , 'check data' , data);
        await this.productRepository.update(Number(id),data);

        return 'update successful';   
    }
    
    async remove(id: string): Promise<void> {
        await this.productRepository.delete(id);
      }
}