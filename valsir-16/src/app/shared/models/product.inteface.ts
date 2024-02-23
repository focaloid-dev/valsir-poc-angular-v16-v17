export interface Product {
  id: number;
  product_name: string;
  color: string;
  image_url: string;
  unit: string;
  depth: number;
  form_container: boolean;
  counter_plate: boolean;
  u_shaped_copper: boolean;
  angle?: boolean; // Optional property
  support_drain?: boolean; // Optional property
  central_faucet: boolean;
  type: string | null;
}
