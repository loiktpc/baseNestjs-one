export class ProductModel {
     id? : number;
     name? : string;
     price? : number;
     categoryid? : string ;

    constructor({id,name,categoryid , price}){
        if(id !== null) this.id = id;
        if(name !== null) this.name = name;
        if(categoryid !== null) this.categoryid = categoryid;
        if(price !== null) this.price = price;
    }
}