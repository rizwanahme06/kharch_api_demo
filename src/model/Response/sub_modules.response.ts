interface sub_module {
    id:number,
    name:string,
    description:string,
    serviceId:number
};

interface sub_ModuleResponseType{
    CREATE?:(arg:any)=> sub_module
}

export const sub_ModuleResponse:sub_ModuleResponseType = {};

sub_ModuleResponse.CREATE=(item)=>{
    return{
        id:item.id,
        name:item.name,
    description:item.description,
    serviceId:item.serviceId
    }
}