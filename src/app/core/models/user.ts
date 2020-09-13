import { City } from './city';
export interface User {

  id: number;
  email: string;
  facebookId: string;
  name: string;
  birthOn: Date;
  ddd: string;
  phone: string;
  cityId: number;
  os: string;
  city: City;
}
