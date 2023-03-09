interface society {
    id:number,
    name:string,
    slug:string,
    address:string,
    pincode:number,
    primaryContectId:number,
    wingType:string,
    noOfWings:number,
    noOfFloors:number,
    flatOnSequence:number,
};

interface societyResponseType{
    CREATE?:(arg:any)=> society
}

export const SocietyResponse:societyResponseType = {};

SocietyResponse.CREATE=(item)=>{
    return{
        id:item.id,
        name:item.name,
        slug:item.slug,
        address:item.address,
        pincode:item.pincode,
        primaryContectId:item.primaryContectId,
        wingType:item.wingType,
        noOfWings:item.noOfWings,
        noOfFloors:item.noOfFloors,
        flatOnSequence:item.flatOnSequence,
    }
}