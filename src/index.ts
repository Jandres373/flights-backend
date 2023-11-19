import app from "./app";
import sequelize from "./database/database";
import './models/index'

const PORT = 8080

try {
  sequelize.sync()
  console.log('db is connected')
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
} catch (error) {
  console.log(error)
}

