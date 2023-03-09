interface bill {
    id:number,
    billTemplateId:number,
    flatId:number,
    billNo:number,
    billDate:Date,
    termAndCondition:string,
    currentBillAmount:number
};

interface BillResponseType{
    CREATE?:(arg:any)=> bill
}

export const BillResponse:BillResponseType = {};

BillResponse.CREATE=(item)=>{
    return{
        id:item.id,
        billTemplateId:item.billTemplateId,
        flatId:item.flatId,
        billNo:item.billNo,
        billDate:item.billDate,
        termAndCondition:item.termAndCondition,
        currentBillAmount:item.currentBillAmount
    }
}