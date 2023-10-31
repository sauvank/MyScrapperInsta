"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
const FeedItem_1 = require("./FeedItem");
class Feed {
    constructor(data) {
        this.data = data;
    }
    get getItems() {
        return this.data.items.map((item) => {
            return {
                getMedias: item.image_versions2.candidates.map(candidate => new FeedItem_1.FeedItem(candidate)),
                getBestResolution: new FeedItem_1.FeedItem(item.image_versions2.candidates[0])
            };
        });
    }
    get getNumResults() {
        return this.data.num_results;
    }
    get getMoreAvailable() {
        return this.data.more_available;
    }
    get getNextMaxId() {
        return this.data.next_max_id;
    }
    get getUser() {
        return this.data.user;
    }
    get getAutoLoadMoreEnabled() {
        return this.data.auto_load_more_enabled;
    }
    get getStatus() {
        return this.data.status;
    }
}
exports.Feed = Feed;
