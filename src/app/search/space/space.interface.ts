import { Availability } from "./availability.interface";

export interface ISpace {
  id: string;
  name: string;
  image: string;
  ianaTimeZone: string;
  capacity: number;
  isBookable: boolean;
  availabilities: Availability[];
  amenities: Amenity[];
}
interface Amenity {
  id: string;
  description: string;
  icon: string;
  order: number;
}
