"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedItem = void 0;
class FeedItem {
    constructor(feedItem) {
        this.feedItem = feedItem;
    }
    get getWidth() {
        return this.feedItem.width;
    }
    get getHeight() {
        return this.feedItem.height;
    }
    get getUrl() {
        return this.feedItem.url;
    }
    get getScanProfile() {
        return this.feedItem.scans_profile;
    }
}
exports.FeedItem = FeedItem;
