import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface BillAttribute{
    id:number,
    billTemplateId:number,
    flatId:number,
    billNo:number,
    billDate:Date,
    termAndCondition:string,
    currentBillAmount:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Bill extends Model<BillAttribute>{}

Bill.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    billTemplateId:{
        type:DataTypes.INTEGER
    },
    flatId:{
        type:DataTypes.INTEGER
    },
    billNo:{
        type:DataTypes.INTEGER
    },
    billDate:{
        type:DataTypes.DATE
    },
    termAndCondition:{
        type:DataTypes.STRING
    },
    currentBillAmount:{
        type:DataTypes.INTEGER
    },
    ipAddress:{
        type:DataTypes.STRING
    },
    isActive:{
        type:DataTypes.INTEGER
    },
    isDeleted:{
        type:DataTypes.INTEGER
    },
    createdBy:{
        type:DataTypes.INTEGER
    },
    createdAt:{
        type:DataTypes.DATE
    },
    modifiedBy:{
        type:DataTypes.INTEGER
    },
    modifiedAt:{
        type:DataTypes.DATE
    }
},{
    sequelize:db,
    tableName:'bill',
    timestamps:false
})
