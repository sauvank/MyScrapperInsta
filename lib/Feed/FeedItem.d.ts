import { IFeedItemMedia } from "../types/insta";
export declare class FeedItem {
    private feedItem;
    constructor(feedItem: IFeedItemMedia);
    get getWidth(): number;
    get getHeight(): number;
    get getUrl(): string;
    get getScanProfile(): string;
}
