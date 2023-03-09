interface subscription {
    id:number,
    packageId:number,
    serviceId:number
};

interface SubscriptionResponseType{
    CREATE?:(arg:any)=> subscription
}

export const SubscriptionResponse:SubscriptionResponseType = {};

SubscriptionResponse.CREATE=(item)=>{
    return{
        id:item.id,
        packageId:item.packageId,
        serviceId:item.serviceId
    }
}