// Importar los módulos y configuraciones necesarios
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

// Definir el modelo
class Place extends Model {
  public id!: string;
  public name!: string;
  public countryId!: string;
  public description!: string;
  public image?: string; 
  public services!: string[]; 
  public createdAt!: Date;
  public updatedAt!: Date;
}

Place.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
    },
    services: {
      type: DataTypes.JSON, // Utilizando JSON para almacenar un array de servicios
    },
  },
  {
    sequelize,
    modelName: 'place', // Nombre de la tabla en la base de datos
  }
);

// definir relaciones

export default Place;
