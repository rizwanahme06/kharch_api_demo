import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface PermissionAttributes{
    id:number,
    roleId:number,
    actionId:number,
    name:string,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Permission extends Model<PermissionAttributes>{}

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    roleId:{
            type: DataTypes.INTEGER
    },
    actionId:{
        type: DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
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
    tableName:'permissions',
    timestamps:false
})


