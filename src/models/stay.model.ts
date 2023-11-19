// Importar los módulos y configuraciones necesarios
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

// Definir el modelo
class Stay extends Model {
  public id!: number;
  public name!: string;
  public placeId!: string;
  public image?: string;
  public price!: number;
  public class!: string;
  public tags!: string[]; 
  public rating!: number; 
  public description!: string;
  public services!: string[]; 
  public availability!: { checkIn: string; checkOut: string }[];
  public favorite!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Stay.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    placeId: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT, 
    },
    class: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
    },
    services: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    availability: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    favorite: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: 'stay',
  }
);

export default Stay;
