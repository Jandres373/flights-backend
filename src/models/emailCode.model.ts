// Import necessary modules and configurations
import { DataTypes, Model } from 'sequelize';
import { Column } from 'sequelize-typescript';
import sequelize from '../database/database';

// Define the model
class EmailCode extends Model {
  public id!: number;
  public code!: string;
  public userId!: number;
}

EmailCode.init(
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'emailcode', // Nombre de la tabla en la base de datos
  }
);

// Definir las relaciones   



export default EmailCode;