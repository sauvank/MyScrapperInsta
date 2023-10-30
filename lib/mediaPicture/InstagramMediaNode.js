"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramMediaNode = void 0;
const InstagramTaggedUser_1 = require("./InstagramTaggedUser");
class InstagramMediaNode {
    constructor(nodeData) {
        this.typename = nodeData.__typename || "";
        this.id = nodeData.id || "";
        this.shortcode = nodeData.shortcode || "";
        this.dimensions = nodeData.dimensions || { height: 0, width: 0 };
        this.displayUrl = nodeData.display_url || "";
        this.taggedUsers = nodeData.edge_media_to_tagged_user.edges.map((taggedUser) => new InstagramTaggedUser_1.InstagramTaggedUser(taggedUser.node));
    }
    get getTypename() {
        return this.typename;
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
    get getTaggedUsers() {
        return this.taggedUsers;
    }
}
exports.InstagramMediaNode = InstagramMediaNode;
