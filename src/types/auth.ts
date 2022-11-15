import { User } from './user'
export type AuthStatus = 'pending' | 'authenticated' | 'unauthenticated'

export interface UserProfile extends User {
    [key: string]: any
}
