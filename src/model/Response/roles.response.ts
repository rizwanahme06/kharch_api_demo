interface roles {
    id:number,
    name:string
};

interface RolesResponseType{
    CREATE?:(arg:any)=> roles
}

export const RolesResponse:RolesResponseType = {};

RolesResponse.CREATE=(item)=>{
    return{
        id:item.id,
       name:item.name
    }
}