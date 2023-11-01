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
        try {
            const { data } = await this.sendRequest(`${this.getBaseFullBaseUrl}/${path}`);
            return new User_1.User(data.data.user, this);
        }
        catch (error) {
            console.error('Error fetching clips, you may need to change the cookie sessionid:', error.message);
            throw new Error('Failed to fetch clips, you may need to change the cookie sessionid');
        }
    }
}
exports.ScrapperInsta = ScrapperInsta;
