interface flat {
    id:number,
   societyId:number,
   flatNo:string,
   floor:number,
   wing:string,
   ownerId:number,
};

interface FlatResponseType{
    CREATE?:(arg:any)=> flat
}

export const FlatResponse:FlatResponseType = {};

FlatResponse.CREATE=(item)=>{
    return{
        id:item.id,
        societyId:item.societyId,
        flatNo:item.flatNo,
        floor:item.floor,
        wing:item.wing,
        ownerId:item.ownerId,
    }
}