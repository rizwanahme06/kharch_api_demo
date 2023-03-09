interface permission {
    id:number,
    roleId:number,
    actionId:number,
    name:string,
};

interface PermissionResponseType{
    CREATE?:(arg:any)=> permission
}

export const PermissionResponse:PermissionResponseType = {};

PermissionResponse.CREATE=(item)=>{
    return{
        id:item.id,
        roleId:item.roleId,
    actionId:item.actionId,
    name:item.name,
       
    }
}