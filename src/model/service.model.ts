import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface serviceAttribute{
    id:number,
    name:string,
   isAddOn:number,
   price:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class service extends Model<serviceAttribute>{}

service.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    isAddOn:{
        type:DataTypes.INTEGER
    },
    price:{
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
    tableName:'services',
    timestamps:false
})
