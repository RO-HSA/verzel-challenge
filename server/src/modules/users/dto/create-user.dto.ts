export class CreateUserDto {
    id?: string
    name: string
    email: string
    password: string
    user_type: 'adm' | 'user'
}
