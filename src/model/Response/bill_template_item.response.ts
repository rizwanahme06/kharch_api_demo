interface bill_template_item {
    id:number,
   templateId:number,
   itemId:number
};

interface Bill_Template_ItemResponseType{
    CREATE?:(arg:any)=> bill_template_item
}

export const Bill_Template_ItemResponse:Bill_Template_ItemResponseType = {};

Bill_Template_ItemResponse.CREATE=(item)=>{
    return{
        id:item.id,
       templateId:item.templateId,
       itemId:item.itemId
    }
}