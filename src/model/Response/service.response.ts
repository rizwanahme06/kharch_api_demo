interface service {
    id:number,
    name:string,
   isAddOn:number,
   price:number
};

interface serviceResponseType{
    CREATE?:(arg:any)=> service
}

export const serviceResponse:serviceResponseType = {};

serviceResponse.CREATE=(item)=>{
    return{
        id:item.id,
        name:item.name,
        isAddOn:item.isAddOn,
        price:item.price
    }
}