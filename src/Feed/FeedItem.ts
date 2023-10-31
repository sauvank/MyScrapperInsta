import {IFeedItemMedia} from "../types/insta";

export class FeedItem{
    private feedItem: IFeedItemMedia;
    constructor(feedItem:IFeedItemMedia) {
        this.feedItem = feedItem;
    }

    get getWidth(){
        return this.feedItem.width
    }

    get getHeight(){
        return this.feedItem.height
    }

    get getUrl(){
        return this.feedItem.url
    }

    get getScanProfile(){
        return this.feedItem.scans_profile
    }
}