export interface NavItem {
  readonly id: number;
  readonly title: string;
  readonly iconName: string;
  readonly url: string[];
  readonly isActive: boolean; 
}
