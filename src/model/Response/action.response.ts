interface actions {
    id:number,
    moduleId:number,
    subModuleId:number,
    name:string,
    description:string,
    url:string
};

interface ActionResponseType{
    CREATE?:(arg:any)=> actions
}

export const ActionResponse:ActionResponseType = {};

ActionResponse.CREATE=(item)=>{
    return{
        id:item.id,
        moduleId:item.moduleId,
        subModuleId:item.subModuleId,
        name:item.name,
        description:item.description,
        url:item.url
    }
}