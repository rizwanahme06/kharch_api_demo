interface management_roles {
    id:number,
   societyId:number,
   roleId:number
};

interface Management_rolesResponseType{
    CREATE?:(arg:any)=> management_roles
}

export const Management_rolesResponse:Management_rolesResponseType = {};

Management_rolesResponse.CREATE=(item)=>{
    return{
        id:item.id,
        societyId:item.societyId,
        roleId:item.roleId
    }
}