import { confInterface } from "./types";
import { User } from "./User";
export declare class ScrapperInsta {
    private BASE_URL;
    private VERSION_API;
    private conf;
    private jsonBrut;
    constructor(conf: confInterface);
    private getHeader;
    private sendRequest;
    private getBaseFullBaseUrl;
    private getJsonBrut;
    getUserMedia(username: string): Promise<User>;
}
