"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramVideo = void 0;
const VideoNode_1 = require("./VideoNode");
class InstagramVideo {
    constructor(videoData, scrapper) {
        this.count = videoData.count || 0;
        this.pageInfo = videoData.page_info || { has_next_page: false, end_cursor: "" };
        this.edges = videoData.edges.map((edge) => new VideoNode_1.VideoNode(edge.node));
    }
    get getCount() {
        return this.count;
    }
    get getPageInfo() {
        return this.pageInfo;
    }
    get getVideos() {
        return this.edges;
    }
}
exports.InstagramVideo = InstagramVideo;
