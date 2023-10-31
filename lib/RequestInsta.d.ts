export declare class RequestInsta {
    private conf;
    private BASE_URL;
    private VERSION_API;
    constructor(conf: any);
    private getHeader;
    sendRequest(url: string): Promise<import("axios").AxiosResponse<any, any>>;
    getFeed(userId: string, max_id: string | void): Promise<import("axios").AxiosResponse<any, any>>;
    getBaseFullBaseUrl(): string;
}
