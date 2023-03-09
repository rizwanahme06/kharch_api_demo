interface module {
    id:number,
    name:string,
    description:string,
    onOrder:number
};

interface ModuleResponseType{
    CREATE?:(arg:any)=> module
}

export const ModuleResponse:ModuleResponseType = {};

ModuleResponse.CREATE=(item)=>{
    return{
        id:item.id,
        name:item.name,
    description:item.description,
    onOrder:item.onOrder
    }
}