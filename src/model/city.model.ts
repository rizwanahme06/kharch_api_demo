import { DataTypes, Model,SmallIntegerDataType } from "sequelize"
import db from "../config/database.config"

// export interface Cities{
//     id?:number|null
//     state?:number|null
//     name:string
// }

// // @Table(
// //     {
// //         tableName:'cities',
// //         timestamps:'false'
// //     }
// // )



// export default class city extends Model implements Cities{

//     id?: number | null | undefined;
//     state?: number | null | undefined;
//     name!: string;
// }

interface CitiesAttributes{
    id:number,
    stateId:number,
    Name:string,
    ipAddress: string,
    isActive: number,
    isDeleted: number,
    createdBy: number,
    createdAt: Date,
    modifiedBy: Date,
    modifiedAt:Date,
}

export class Cities extends Model<CitiesAttributes>{}

Cities.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    stateId:{
            type: DataTypes.INTEGER
    },
    Name:{
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
    tableName:'cities',
    timestamps:false
})


//  module.exports =Cities;