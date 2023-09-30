import { InstaCallBack } from "./types/insta";
import { confInterface } from "./types";
export declare class ScrapperInsta {
    private BASE_URL;
    private VERSION_API;
    private conf;
    constructor(conf: confInterface);
    private getHeader;
    private sendRequest;
    private getBaseFullBaseUrl;
    getUserMedia(username: string): Promise<InstaCallBack>;
}
