import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface FlatAttribute{
    id:number,
   societyId:number,
   flatNo:string,
   floor:number,
   wing:string,
   ownerId:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Flat extends Model<FlatAttribute>{}

Flat.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    societyId:{
        type:DataTypes.INTEGER
    },
    flatNo:{
        type:DataTypes.STRING
    },
    floor:{
        type:DataTypes.INTEGER
    },
    wing:{
        type:DataTypes.STRING
    },
    ownerId:{
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
    tableName:'flats',
    timestamps:false
})
