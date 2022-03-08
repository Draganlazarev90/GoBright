export interface IAvailability {
  spaceId: string;
  availabilities: Availability[]
}
export interface Availability {
  from: string;
  till: string;
}
