"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapperInsta = void 0;
const User_1 = require("./User");
const RequestInsta_1 = require("./RequestInsta");
class ScrapperInsta extends RequestInsta_1.RequestInsta {
    constructor(conf) {
        super(conf);
        this.jsonBrut = {};
    }
    async getUserMedia(username) {
        const path = `users/web_profile_info/?username=${username}`;
        const { data } = await this.sendRequest(`${this.getBaseFullBaseUrl()}/${path}`);
        return new User_1.User(data.data.user, this);
    }
}
exports.ScrapperInsta = ScrapperInsta;
