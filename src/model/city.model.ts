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
    stateid:number,
    name:string,
    ipaddress: string,
    isactive: number,
    isdeleted: number,
    createdby: number,
    createdat: Date,
    modifiedby: Date,
    modifiedat:Date,
}

export class Cities extends Model<CitiesAttributes>{}

Cities.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    stateid:{
            type: DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ipaddress:{
        type:DataTypes.STRING
    },
    isactive:{
        type:DataTypes.INTEGER
    },
    isdeleted:{
        type:DataTypes.INTEGER
    },
    createdby:{
        type:DataTypes.INTEGER
    },
    createdat:{
        type:DataTypes.DATE
    },
    modifiedby:{
        type:DataTypes.INTEGER
    },
    modifiedat:{
        type:DataTypes.DATE
    }
},{
    sequelize:db,
    tableName:'cities',
    timestamps:false
})


//  module.exports =Cities;