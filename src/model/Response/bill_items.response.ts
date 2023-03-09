interface bill_template {
    id:number,
    name:string,
   description:string,
   amount:number,
};

interface Bill_ItemsResponseType{
    CREATE?:(arg:any)=> bill_template
}

export const Bill_ItemsResponse:Bill_ItemsResponseType = {};

Bill_ItemsResponse.CREATE=(item)=>{
    return{
        id:item.id,
        name:item.name,
        description:item.description,
        amount:item.amount
    }
}