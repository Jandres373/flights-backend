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
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      connectTimeout: 30000, 
    }
  }
})

export default sequelize;