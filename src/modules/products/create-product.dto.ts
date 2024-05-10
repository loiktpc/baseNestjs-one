import { IsNotEmpty, MinLength } from "class-validator";

export class ProductDto {
    @MinLength(5 , {message : 'vui lòng nhập 5 kí tự'})
    name? : string;
    price? : number;
    @IsNotEmpty()
    categoryid? : string ;
}