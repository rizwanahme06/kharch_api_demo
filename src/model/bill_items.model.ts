import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface Bill_ItemsAttribute{
    id:number,
   name:string,
   description:string,
   amount:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Bill_Items extends Model<Bill_ItemsAttribute>{}

Bill_Items.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    amount:{
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
    tableName:'bill_template',
    timestamps:false
})
