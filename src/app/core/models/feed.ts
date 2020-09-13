import { Assets } from './assets';
import { City } from './city';
import { User } from './user';

export interface Feed{

  id: number;
  kind: number;
  title: string;
  comment: string;
  anonymous: boolean;
  createdAt: Date;
  user: User;
  city: City;
  assets: Assets[];
}
