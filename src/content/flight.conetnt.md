
### servicios

const amenitiesOptions: string[] = [
  "Wi-Fi",
  "In-flight Entertainment",
  "Reclining Seats",
  "Onboard Meals",
  "Complimentary Beverages",
  "Power Outlets",
  "USB Ports",
  "Individual Screens",
  "Free Headphones",
  "Blankets and Pillows",
  "Extra Legroom",
  "Panoramic Windows",
  "Individual Reading Lights",
  "Customized Air Conditioning",
  "Onboard Bar Service",
  "Rest Areas",
  "Amenity Kits",
  "Access to VIP Lounges",
  "Premium Seating",
  "Live Entertainment",
  "Touchscreen Displays",
  "Free Magazines and Newspapers",
  "Personalized Entertainment System",
  "Adjustable Seats",
  "Ambient Lighting",
  "Gourmet Snacks",
  "Complimentary Beers and Wines",
];

## model

class Flight extends Model {
  public id!: number;
  public code!: string;
  public airline!: string;
  public originId!: number;
  public destinationId!: number;
  public departureTime!: Date; // Agregando la hora de salida del vuelo
  public arrivalTime!: Date; // Agregando la hora de llegada del vuelo
  public duration!: string; // Agregando la duración del vuelo
  public price!: number; // Agregando el precio del vuelo
  public availableSeats!: number; // Agregando la cantidad de asientos disponibles
  public layovers!: number[]; // Agregando información sobre escalas o escalas intermedias
  public amenities!: string[]; // Agregando información sobre comodidades del vuelo
  public createdAt!: Date;
  public updatedAt!: Date;
}