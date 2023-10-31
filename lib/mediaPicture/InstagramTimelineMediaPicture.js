"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramTimelineMediaPicture = void 0;
const InstagramMediaNode_1 = require("./InstagramMediaNode");
class InstagramTimelineMediaPicture {
    constructor(userId, timelineMediaData, scrapper) {
        this.pages = [];
        this.count = timelineMediaData.count || 0;
        this.pageInfo = timelineMediaData.page_info || { has_next_page: false, end_cursor: "" };
        this.nodes = timelineMediaData.edges.map((edge) => new InstagramMediaNode_1.InstagramMediaNode(edge.node));
        this.pages.push(this);
        this.scrapper = scrapper;
        this.userId = userId;
    }
    get getCount() {
        return this.count;
    }
    get getPageInfo() {
        return this.pageInfo;
    }
    get getPictures() {
        return this.nodes;
    }
}
exports.InstagramTimelineMediaPicture = InstagramTimelineMediaPicture;
