interface bill_template {
    id:number,
    name:string
};

interface Bill_TemplateResponseType{
    CREATE?:(arg:any)=> bill_template
}

export const Bill_TemplateResponse:Bill_TemplateResponseType = {};

Bill_TemplateResponse.CREATE=(item)=>{
    return{
        id:item.id,
       name:item.name
    }
}