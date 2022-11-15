export type User = {
    id: string
    name: string
    email: string
    mobileNo: string | null
    address: string | null
    status: 'active' | 'inactive'
    createdAt: Date | null
    updatedAt: Date | null
    gender: 'male' | 'female' | null
}

export type RoleUser = {
    id: string
    userId: string
    roleId: string
    createdAt: Date | null
    updatedAt: Date | null
}

export type Role = {
    id: string
    name: string
    title: string
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
}

export interface RoleUserWithRole extends RoleUser {
    role: Role
}
