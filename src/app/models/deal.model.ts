export interface Deal {
  id: number;
  title: string;
  coverImage?: string;
  vendor?: string;
  description: string;
  oldPrice?: number;
  newPrice?: number;
  status?: string;
  country?: string;
  city?: string;
  startDate?: string;
  expiryDate?: string;
}
