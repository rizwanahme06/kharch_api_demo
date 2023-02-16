interface customers {
    id:number,
    roleId:number,
    FirstName:string,
    LastName:string,
    Email:string,
    Mobile:number,
};

interface CustomerResponseType{
    CREATE?:(arg:any)=> customers
}

export const CustomerResponse:CustomerResponseType = {};

CustomerResponse.CREATE=(item)=>{
    return{
        id:item.id,
        roleId:item.roleId,
        FirstName:item.FirstName,
        LastName:item.LastName,
        Email:item.Email,
        Mobile:item.Mobile,
    }
}