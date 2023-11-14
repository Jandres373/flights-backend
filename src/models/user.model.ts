// Import necessary modules and configurations
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

// Define the model
class User extends Model {
  public id!: number;
  public firstName!:string;
  public lastName!: string;
  public email!: string;
  public country!: string;
  public image!: string;
  public isVerified!: boolean;
  public password!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public frontBaseUrl!: string;
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
    },
    frontBaseUrl: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'user', // Nombre de la tabla en la base de datos
  }
);

// Definir las relaciones   



export default User;