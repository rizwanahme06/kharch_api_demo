import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

// Create model of customer table.

interface CustomerAttribute{
    id:number,
    roleId:number,
    firstName:string,
    lastName:string,
    email:string,
    mobile:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
    otp:string
}

  
export class Customers extends Model<CustomerAttribute>{
    static id: any;
    
}

Customers.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleId: {
        type: DataTypes.INTEGER
    },
    firstName: {
        type:DataTypes.STRING
    },
    lastName: {
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    },
    mobile: {
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