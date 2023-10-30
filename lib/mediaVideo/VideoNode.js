"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoNode = void 0;
class VideoNode {
    constructor(nodeData) {
        this.__typename = nodeData.__typename || "";
        this.id = nodeData.id || "";
        this.shortcode = nodeData.shortcode || "";
        this.dimensions = nodeData.dimensions || { height: 0, width: 0 };
        this.displayUrl = nodeData.display_url || "";
        this.owner = nodeData.owner || { id: "", username: "" };
        this.isVideo = nodeData.is_video || false;
        this.videoUrl = nodeData.video_url || "";
        this.videoViewCount = nodeData.video_view_count || 0;
        this.edgeMediaToCaption = nodeData.edge_media_to_caption || { edges: [] };
    }
    get getTypename() {
        return this.__typename;
    }
    get getId() {
        return this.id;
    }
    get getShortcode() {
        return this.shortcode;
    }
    get getDimensions() {
        return this.dimensions;
    }
    get getDisplayUrl() {
        return this.displayUrl;
    }
    get getOwner() {
        return this.owner;
    }
    get getIsVideo() {
        return this.isVideo;
    }
    get getVideoUrl() {
        return this.videoUrl;
    }
    get getVideoViewCount() {
        return this.videoViewCount;
    }
    get getEdgeMediaToCaption() {
        return this.edgeMediaToCaption;
    }
}
exports.VideoNode = VideoNode;
