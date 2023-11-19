// Import necessary modules and configurations
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

class Country extends Model {
  public id!: number;
  public name!: string;
  public image?: string;
  public description!: string;
  public attractions?: string[];
  public turism?: number;
  public topDestination!: boolean;
  public currency!: string;
  public language!: string;
  public timeZone!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Country.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100], // Nombre debe tener entre 2 y 100 caracteres
      },
    },
    image: {
      type: DataTypes.STRING(500),
    },
    description: {
      type: DataTypes.TEXT, // Utilizando TEXT para descripciones más largas
      allowNull: false,
    },
    attractions: {
      type: DataTypes.JSON, // Utilizando JSON para almacenar un array de atracciones
    },
    turism: {
      type: DataTypes.FLOAT, // Utilizando FLOAT para datos de turismo, ajusta según tus necesidades
    },
    topDestination: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    currency: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    timeZone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'country', // Nombre de la tabla en la base de datos
  }
);


// Definir las relaciones   

export default Country;