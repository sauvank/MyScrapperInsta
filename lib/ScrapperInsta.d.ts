import { confInterface } from "./types";
import { User } from "./User";
import { RequestInsta } from "./RequestInsta";
export declare class ScrapperInsta extends RequestInsta {
    private jsonBrut;
    constructor(conf: confInterface);
    getUserMedia(username: string): Promise<User>;
}
