export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  availabilityStatus: string;
  brand: string;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  rating: number;
  returnPolicy: string;
  reviews: Array<{
    id: number;
    comment: string;
    rating: number;
  }>;
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  warrantyInformation: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}