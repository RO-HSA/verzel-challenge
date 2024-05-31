export class CreateCarDto {
    id: string
    name: string
    brand: string
    model: string
    year: number
    mileage: number
    price: number
    transmission: string
    photo: FileList
}
