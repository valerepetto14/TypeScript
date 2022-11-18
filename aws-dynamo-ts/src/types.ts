export interface user {
    username: string | null;
    password: string | null;
    rol: string | null;
    createdAt?:string | Date;
    uodatedAt?:Date | Date;
}

export interface userAuth {
    username: string | null;
    password: string | null;
}