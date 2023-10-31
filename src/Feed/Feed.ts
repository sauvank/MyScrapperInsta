import {IFeed, IFeedUser, IItemsFeed} from '../types/insta'
import {FeedItem} from "./FeedItem";

export class Feed{
    private data: IFeed;
    constructor(data: IFeed) {
        this.data = data;
    }

    // Getter for "items"
    get getItems():{ getMedias: FeedItem[], getBestResolution: FeedItem; }[] {
        return this.data.items.map((item:IItemsFeed) => {
            return {
                getMedias : item.image_versions2.candidates.map(candidate => new FeedItem(candidate)),
                getBestResolution : new FeedItem(item.image_versions2.candidates[0])
            }
        });
    }

    // Getter for "num_results"
    get getNumResults(): number {
        return this.data.num_results;
    }

    // Getter for "more_available"
    get getMoreAvailable(): boolean {
        return this.data.more_available;
    }

    // Getter for "next_max_id"
    get getNextMaxId(): string {
        return this.data.next_max_id;
    }

    // Getter for "user"
    get getUser(): IFeedUser {
        return this.data.user;
    }

    // Getter for "auto_load_more_enabled"
    get getAutoLoadMoreEnabled(): boolean {
        return this.data.auto_load_more_enabled;
    }

    // Getter for "status"
    get getStatus(): string {
        return this.data.status;
    }
}