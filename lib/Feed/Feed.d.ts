import { IFeed, IFeedUser } from '../types/insta';
import { FeedItem } from "./FeedItem";
export declare class Feed {
    private data;
    constructor(data: IFeed);
    get getItems(): {
        getMedias: FeedItem[];
        getBestResolution: FeedItem;
    }[];
    get getNumResults(): number;
    get getMoreAvailable(): boolean;
    get getNextMaxId(): string;
    get getUser(): IFeedUser;
    get getAutoLoadMoreEnabled(): boolean;
    get getStatus(): string;
}
