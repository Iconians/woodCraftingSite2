export interface Carving {
  id: number;
  image: string;
  carvingName: string;
  userId: number;
  carverName: string;
  availableToPurchase: boolean;
  story: string;
  type: string;
  price: null | number;
  qty: number;
}

export interface Favorite {
  userId: number;
  carvingId: number;
  id: number;
}
