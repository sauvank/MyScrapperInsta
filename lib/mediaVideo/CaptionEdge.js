"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptionEdge = void 0;
class CaptionEdge {
    constructor(edgeData) {
        this.node = edgeData.node || { text: "" };
    }
    get getNode() {
        return this.node;
    }
}
exports.CaptionEdge = CaptionEdge;
