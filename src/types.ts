export type ProductCategory = 'todos' | 'carteras' | 'morrales' | 'billeteras';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'carteras' | 'morrales' | 'billeteras';
  tagline: string;
  price: number;
  currency: string;
  description: string;
  details: string[];
  imageUrl: string;
  badge?: string;
  colors?: ProductColor[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserProfile {
  name: string;
  email: string;
  memberSince: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  deliveryPreferences: {
    ecoPackaging: boolean;
    giftWrap: boolean;
    requireSignature: boolean;
    leaveAtDoor: boolean;
  };
}
