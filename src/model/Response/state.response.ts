interface state {
    id:number,
    countryId:number,
    name:string
};

interface StateResponseType{
    CREATE?:(arg:any)=> state
}

export const StateResponse:StateResponseType = {};

StateResponse.CREATE=(item)=>{
    return{
        id:item.id,
        countryId:item.countryId,
       name:item.name
    }
}