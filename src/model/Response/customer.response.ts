interface customers {
    id:number,
    roleId:number,
    firstName:string,
    lastName:string,
    email:string,
    mobile:number,
    isActive:number
};

interface CustomerResponseType{
    CREATE?:(arg:any)=> customers
}

export const CustomerResponse:CustomerResponseType = {};

CustomerResponse.CREATE=(item)=>{
    return{
        id:item.id,
        roleId:item.roleId,
        firstName:item.firstName,
        lastName:item.lastName,
        email:item.email,
        mobile:item.mobile,
        isActive:item.isActive
}
}


export let FailResponse = (e:any)=>{
    return ({ data: e.data, error: e, msg: e.massage, status: "Error " })

}