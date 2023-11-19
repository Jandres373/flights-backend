Las estadias deben permitir que el usuario las seleccione y obtenga sus detalles,
deben permitir que el usuario las agregue a favoritos,

## acciones:

1. Conectarse a los vuelos.
2. Mostrar disponibilidad de check-in y check-out.
3. Mostrar ofertas y servicios.

## info asociada:

const serviciosHotel = [
  "wifi",
  "pool",
  "spa",
  "sauna",
  "AC",
  "gym",
  "ocean_view",
  "out_door_services",
  "buffette",
  "business_suit",
  "yoga",
  "pet_friendly",
  "concierge_services",
  "child_care",
  "room_service",
  "bike_rental",
  "car_rental",
  "airport_shuttle",
  "entertainment_night",
  "guided_tours",
  "laundry",
  "conference_rooms",
  "wedding_services",
  "beach_access",
  "ski_storage",
  "cultural_events",
  "tech_support",
  "valet_parking",
  "private_balcony",
  "gourmet_dining",
  "live_music",
  "luxury_transportation",
  "art_gallery",
  "book_library",
  "pet_sitting",
  "personal_trainer",
  "private_chef",
  "scenic_helicopter_tours",
  "underwater_dining",
  "treehouse_accommodation",
];

const tags = [
  "#BestDeal",
  "#Popular",
  "#PetFriendly",
  "#BusinessOriented",
  "#Luxury",
  "#Beachfront",
  "#FamilyFriendly",
  "#Historic",
  "#MountainView",
  "#EcoFriendly",
  "#SpaRetreat",
  "#Romantic",
  "#BudgetFriendly",
  "#CityCenter",
  "#AdventureHub",
  "#ArtisticVibes",
  "#GastronomicDelight",
  "#TechSavvy",
  "#WellnessHaven",
  "#SportsParadise",
  "#CulturalGem",
  "#TranquilEscape",
  "#NightlifeHotspot",
  "#FuturisticDesign",
  "#UniqueArchitecture",
  "#UnexploredGems",
  "#WhimsicalHideaway",
  "#TimelessElegance",
];

## modelo:

class stayModel {
  public id!: string;
  public name!: string;
  public placeId!: string;
  public image?: string;
  public price!: string;
  public class!: string;
  public tags!: string[]; // Asumiendo que tags es un array de strings
  public rating!: number;
  public description!: string;
  public services!: string[]; // Asumiendo que services es un array de strings
  public availability!: { checkIn: string; checkOut: string }[];
  public favorite!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}


## clase en caso de POO descripcion de la clase HotelService
class HotelService {
constructor(data){
this.\_data = data;
}
get id(){ return this.\_data.id;}
get name(){return this.\_data.name}
get location(){return this.\_data.location}
get price(){return this.\_data.price}
get rating(){return this.\_data.rating}
get description(){return this.\_data.description}
get services(){return this.\_data.services}
get availability(){return this.\_data.availability}
set favorite (value){this.\_data.favorite= value}
get favorite(){return this.\_data.favorite}
}