import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const DATABASE = process.env.DATABASE 
const USERNAME = process.env.USER
const PASSWORD = process.env.PASSWORD
const HOST = process.env.HOST

const sequelize = new Sequelize({
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

export default sequelize;