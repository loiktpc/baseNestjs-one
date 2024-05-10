// kiểu trả về  
 export class  ResPonsData<D> {
    data : D | D[] ;
    statuscode : number ;
    message : string ; 
    constructor(data : D , statuscode : number , message : string){
        this.data = data ;
        this.statuscode = statuscode ;
        this.message = message ;
        return this 
    }
    
}