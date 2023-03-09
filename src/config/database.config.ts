import { Sequelize } from "sequelize";

// Create Link with database

const db = new Sequelize('postgresql://postgres:root@localhost:5432/kharch_io?schema=public')



export default db;