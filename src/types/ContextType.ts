export interface User{
    email: string;
}
export interface UserContextType{
    user: User|null;
    setUser: (user: User|null)=>void;
}