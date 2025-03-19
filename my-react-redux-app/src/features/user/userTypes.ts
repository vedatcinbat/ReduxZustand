export interface UsersState {
    users: User[],
    loading?: boolean,
    error?: string | null
}

export interface User {
    id: number;
    name: string;
}