


## servicios 

const placeServices = [
  "public_transportation",
  "guided_tours",
  "museums",
  "local_cuisine",
  "parks",
  "nightlife",
  "shopping_districts",
  "cultural_events",
  "historic_sites",
  "sports_venues",
  "beaches",
  "theaters",
];

## model

class placeModel {
  public id!: string;
  public name!: string;
  public countryId!: string;
  public description!: string;
  public image?: string; // Puedes hacer que la imagen sea opcional si no siempre está presente
  public services!: string[]; // Asumiendo que services es un array de strings
  public createdAt!: Date;
  public updatedAt!: Date;
}

## tabla de relaciones:

| Place ID | Country ID        | Place Name                          |
|----------|------------       |-------------------------------------|
| 1        | 1 (Spain)         | Barcelona                           |
| 2        | 1 (Spain)         | Sevilla                             |
| 3        | 1 (Spain)         | Valencia                            |
| 4        | 1 (Spain)         | Granada                             |
| 5        | 1 (Spain)         | Madrid                              |
| 6        | 2 (France)        | Paris                               |
| 7        | 2 (France)        | Niza                                |
| 8        | 2 (France)        | Lyon                                |
| 9        | 2 (France)        | Marsella                            |
| 10       | 2 (France)        | Estrasburgo                         |
| 11       | 3 (United States) | Nueva York                          |
| 12       | 3 (United States) | Los Ángeles                         |
| 13       | 3 (United States) | Chicago                             |
| 14       | 3 (United States) | Las Vegas                           |
| 15       | 3 (United States) | Orlando                             |
| 16       | 4 (Canada)        | Toronto                             |
| 17       | 4 (Canada)        | Montreal                            |
| 18       | 4 (Canada)        | Vancouver                           |
| 19       | 4 (Canada)        | Quebec City                         |
| 20       | 4 (Canada)        | Calgary                             |
| 21       | 5 (Colombia)      | Bogotá                              |
| 22       | 5 (Colombia)      | Cartagena                           |
| 23       | 5 (Colombia)      | Medellín                            |
| 24       | 5 (Colombia)      | Cali                                |
| 25       | 5 (Colombia)      | Santa Marta                         |
| 26       | 6 (Chile)         | Santiago                            |
| 27       | 6 (Chile)         | Valparaíso                          |
| 28       | 6 (Chile)         | Easter Island                       |
| 29       | 6 (Chile)         | Puerto Varas                        |
| 30       | 6 (Chile)         | Torres del Paine National Park      |
| 31       | 7 (Egypt)         | Cairo                               |
| 32       | 7 (Egypt)         | Luxor                               |
| 33       | 7 (Egypt)         | Aswan                               |
| 34       | 7 (Egypt)         | Hurghada                            |
| 35       | 7 (Egypt)         | Sharm El Sheikh                     |
| 36       | 8 (South Africa)  | Cape Town                           |
| 37       | 8 (South Africa)  | Kruger National Park                |
| 38       | 8 (South Africa)  | Johannesburg                        |
| 39       | 8 (South Africa)  | Durban                              |
| 40       | 8 (South Africa)  | Stellenbosch                        |
| 41       | 9 (Russia)        | Moscow                              |
| 42       | 9 (Russia)        | Saint Petersburg                    |
| 43       | 9 (Russia)        | Trans-Siberian Railway              |
| 44       | 9 (Russia)        | Kazan                               |
| 45       | 9 (Russia)        | Sochi                               |
| 46       | 10 (China)        | Beijing                             |
| 47       | 10 (China)        | Shanghai                            |
| 48       | 10 (China)        | Xi'an                               |
| 49       | 10 (China)        | Guilin                              |
| 50       | 10 (China)        | Hangzhou                            |