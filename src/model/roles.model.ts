import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface RolesAttribute{
    id:number,
   name:string,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Roles extends Model<RolesAttribute>{}

Roles.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
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
    tableName:'roles',
    timestamps:false
})
