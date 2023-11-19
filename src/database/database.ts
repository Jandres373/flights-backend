import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

if (!process.env.DATABASE || !process.env.USER || !process.env.PASSWORD || !process.env.HOST || !process.env.PORT) {
  throw new Error('Faltan variables de entorno requeridas');
}

const DATABASE = process.env.DATABASE 
const USERNAME = process.env.USER
const PASSWORD = process.env.PASSWORD
const HOST = process.env.HOST
const PORT = parseInt(process.env.PORT) || 5432

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  logging: false
})

export default sequelize;
