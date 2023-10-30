"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramTaggedUser = void 0;
class InstagramTaggedUser {
    constructor(taggedUserData) {
        this.user = taggedUserData.user || {
            full_name: "",
            followed_by_viewer: false,
            id: "",
            is_verified: false,
            profile_pic_url: "",
            username: "",
        };
        this.x = taggedUserData.x || 0;
        this.y = taggedUserData.y || 0;
    }
    get getUser() {
        return this.user;
    }
    get getX() {
        return this.x;
    }
    get getY() {
        return this.y;
    }
}
exports.InstagramTaggedUser = InstagramTaggedUser;
