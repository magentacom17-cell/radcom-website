export interface ServiceItem {
  id: string;
  title: string;
  category: 'it' | 'printing' | 'atk' | 'engineering' | 'service' | 'general';
  iconName: string;
  shortDesc: string;
  details: string[];
  popularSpecs: string[];
  badge?: string;
}

export interface PlatformLink {
  id: string;
  name: string;
  code: string;
  category: string;
  description: string;
  url: string;
  badge: string;
  color: string;
}

export interface ClientPartner {
  name: string;
  sector: 'Pemerintah' | 'BUMN' | 'Pendidikan' | 'Swasta';
  location?: string;
}

export interface RfqFormState {
  companyOrName: string;
  contact: string;
  category: string;
  itemName: string;
  quantity: string;
  notes: string;
}
