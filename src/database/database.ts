import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

/* if (!process.env.DATABASE || !process.env.USER || !process.env.PASSWORD || !process.env.HOST || !process.env.PORT) {
  throw new Error('Faltan variables de entorno requeridas');
} */

/* const DATABASE = process.env.DATABASE 
const USERNAME = process.env.USER
const PASSWORD = process.env.PASSWORD
const HOST = process.env.HOST
const PORT = parseInt(process.env.PORT) || 5432 */

if (!process.env.DB) {
  throw new Error('Faltan variables de entorno requeridas');
}

const DB = process.env.DB

const sequelize = new Sequelize(DB,{
  dialectOptions: {
    keepAlive: true, 
    keepAliveInterval: 30000 
  },
  logging: false
})

export default sequelize;
