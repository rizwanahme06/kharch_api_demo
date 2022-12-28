import { Sequelize } from "sequelize";

const db = new Sequelize('postgresql://postgres:root@localhost:5432/kharch_io?schema=public')


export default db;