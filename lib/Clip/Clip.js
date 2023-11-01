"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clip = void 0;
class Clip {
    constructor(clip) {
        this.clip = clip;
    }
    get getType() {
        return this.clip.type;
    }
    get getWidth() {
        return this.clip.width;
    }
    get getHeight() {
        return this.clip.height;
    }
    get getUrl() {
        return this.clip.url;
    }
    get getId() {
        return this.clip.id;
    }
}
exports.Clip = Clip;
