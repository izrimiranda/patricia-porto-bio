export enum EventType {
  CHURCH = 'Igreja',
  CITY_HALL = 'Prefeitura'
}

export interface SocialLink {
  label: string;
  icon: React.ReactNode;
  url?: string;
  action?: () => void;
}
