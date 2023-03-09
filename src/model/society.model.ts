import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

interface societyAttribute{
    id:number,
    name:string,
    slug:string,
    address:string,
    pincode:number,
    primaryContectId:number,
    wingType:string,
    noOfWings:number,
    noOfFloors:number,
    flatOnSequence:number,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Society extends Model<societyAttribute>{}

Society.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },

    ipAddress: {
        type: DataTypes.STRING
    },
    isActive: {
        type: DataTypes.INTEGER
    },
    isDeleted: {
        type: DataTypes.INTEGER
    },
    createdBy: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    modifiedBy: {
        type: DataTypes.INTEGER
    },
    modifiedAt: {
        type: DataTypes.DATE
    },
    slug: {
        type:DataTypes.STRING
    },
    address: {
        type:DataTypes.STRING
    },
    pincode:{
        type:DataTypes.INTEGER
    },
    primaryContectId: {
        type:DataTypes.INTEGER
    },
    wingType: {
        type:DataTypes.STRING
    },
    noOfWings: {
        type:DataTypes.INTEGER
    },
    noOfFloors: {
        type:DataTypes.INTEGER
    },
    flatOnSequence: {
        type:DataTypes.STRING
    }
},{
    sequelize:db,
    tableName:'societies',
    timestamps:false
})
