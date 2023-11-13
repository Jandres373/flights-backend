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
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    frontBaseUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'user', // Nombre de la tabla en la base de datos
  }
);

// Definir las relaciones   



export default User;