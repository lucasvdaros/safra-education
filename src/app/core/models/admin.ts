import { AccessRules } from './accessRules';
import { Area } from './area';

export interface Admin{
  id: number;
  name: string;
  email: string;
  networkKey: string;
  passwordDigest: string;
  active: boolean;
  areas: Area[];
  accessRules: AccessRules[];
}
