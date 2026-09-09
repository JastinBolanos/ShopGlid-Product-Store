export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  description: string;
  details: string[];
  imageUrl: string;
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
