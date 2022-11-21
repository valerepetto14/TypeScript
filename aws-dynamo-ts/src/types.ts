export interface user {
    username: string;
    password: string;
    rol: string | null;
    createdAt?:string | Date;
    uodatedAt?:Date | Date;
}

export interface userAuth {
    username: string;
    password: string;
}


export interface task {
    
}