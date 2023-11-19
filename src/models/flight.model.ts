// Import necessary modules and configurations
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

// Define the model
class Flight extends Model {
  public id!: number;
  public code!: string;
  public airline!: string;
  public originId!: number;
  public destinationId!: number;
  public departureTime!: Date;
  public arrivalTime!: Date;
  public duration!: string;
  public price!: number;
  public availableSeats!: number;
  public layovers!: number[];
  public amenities!: string[];
  public createdAt!: Date;
  public updatedAt!: Date;
}

Flight.init(
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destinationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    layovers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    amenities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Flight',
  }
);

export default Flight;