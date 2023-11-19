

# Esta pagina mostrará una descripcion del pais, sus atracciones, porcentaje de turismo y otra informacion complementaria y necesaria para tener en cuenta.

## model

class Country extends Model {
  public id!: number;
  public name!: string;
  public image?: string;
  public description!: string; 
  public attractions?: string[];
  public turism?: number;
  public topdestination!: boolean;
  public currency!: string; // Agregando información sobre la moneda del país
  public language!: string; // Agregando información sobre el idioma principal del país
  public timeZone!: string; // Agregando información sobre la zona horaria del país
  public createdAt!: Date;
  public updatedAt!: Date;
}