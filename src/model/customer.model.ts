import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface CustomerAttribute{
    id:number,
    roleId:number,
    FirstName:string,
    LastName:string,
    Email:string,
    Mobile:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
    otp:string
}

export class Customers extends Model<CustomerAttribute>{}

Customers.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleId: {
        type: DataTypes.INTEGER
    },
    FirstName: {
        type:DataTypes.STRING
    },
    LastName: {
        type:DataTypes.STRING
    },
    Email: {
        type:DataTypes.STRING
    },
    Mobile: {
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
    },
    otp:{
        type:DataTypes.STRING
    }
},{
    sequelize:db,
    tableName:'customers',
    timestamps:false
})