export interface MenuItem {
  id: string;
  name: string;
  displayName: string;
  routePath: string;
}

export interface MenuSection {
  id: string;
  name: string;
  displayName: string;
  routePath: string;
  features: MenuItem[];
}

export interface CategoryMenu {
  id: string;
  displayName: string;
  routePath: string;
  modules: MenuSection[];
}

export type CategoryType = 'hr' | 'org' | 'finance' | 'realestate' | 'it' | 'crm';