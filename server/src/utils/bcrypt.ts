import { genSaltSync, hashSync, compareSync } from 'bcrypt'

export async function encodePassword(rawPassword: string) {
    const saltRounds = 10
    const salt = genSaltSync(saltRounds)
    return hashSync(rawPassword, salt)
}

export async function comparePassword(rawPassword: string, hash: string) {
    return compareSync(rawPassword, hash)
}