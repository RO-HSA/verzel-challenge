export interface Cars {
  id?: string;
  name: string;
  brand: string;
  model: string;
  year: number | string;
  mileage: number | string;
  price: number | string;
  transmission: string;
  photo: FileList | null | string;
}

export interface CarResponse extends Cars {
  photo: string;
}
