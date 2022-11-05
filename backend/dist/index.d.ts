import { IUser } from "./models/user";
export {};
declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}
