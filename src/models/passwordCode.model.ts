// Import necessary modules and configurations
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

// Define the model
class PasswordCode extends Model {
  public id!: number;
  public code!: string;
  public userId!: number;
}

PasswordCode.init(
  {
    code: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    modelName: 'passwordcode', // Nombre de la tabla en la base de datos
  }
);

// Definir las relaciones   


export default PasswordCode;