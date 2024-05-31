export interface Cars {
  id?: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  transmission: string;
  photo: FileList | null | string;
}

export interface CarResponse extends Cars {
  photo: string;
}
