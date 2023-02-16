interface cities {
    id:number,
    stateId:number,
    name:string,
};

interface CityResponseType{
    CREATE?:(arg:any)=> cities
}

export const CityResponse:CityResponseType = {};

CityResponse.CREATE=(item)=>{
    return{
        id:item.id,
        stateId:item.stateId,
       name:item.name
    }
}