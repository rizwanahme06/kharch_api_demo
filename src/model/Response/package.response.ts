interface packages {
    id:number,
    name:string,
    basePrice:number,
    maxUserLimit:number,
    discountLimit:number,
    onTrail:number
};

interface PackageResponseType{
    CREATE?:(arg:any)=> packages
}

export const PackageResponse:PackageResponseType = {};

PackageResponse.CREATE=(item)=>{
    return{
        id:item.id,
        name:item.name,
        basePrice:item.basePrice,
        maxUserLimit:item.maxUserLimit,
        discountLimit:item.discountLimit,
        onTrail:item.onTrail
    }
}