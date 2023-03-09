interface country {
    id:number,
    name:string,
    countryCode:string
};

interface CountryResponseType{
    CREATE?:(arg:any)=> country
}

export const CountryResponse:CountryResponseType = {};

CountryResponse.CREATE=(item)=>{
    return{
        id:item.id,
       name:item.name,
       countryCode:item.countryCode
    }
}