"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestInsta = void 0;
const axios_1 = __importDefault(require("axios"));
class RequestInsta {
    constructor(conf) {
        this.BASE_URL = 'https://www.instagram.com/api';
        this.VERSION_API = 'v1';
        this.conf = conf;
    }
    getHeader() {
        return {
            'authority': 'www.instagram.com',
            'accept': '*/*',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': `ds_user_id=${this.conf.cookie.ds_user_id}; sessionid=${this.conf.cookie.sessionid};`,
            'dnt': '1',
            'referer': 'https://www.instagram.com/p/CxcvjPbvJbP/?img_index=1',
            'sec-ch-ua': '"Brave";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
            'x-asbd-id': this.conf.header.x_asbd_id,
            'x-ig-app-id': this.conf.header.x_ig_app_id,
            'x-requested-with': 'XMLHttpRequest',
        };
    }
    async sendRequest(url) {
        const headers = this.getHeader();
        return await axios_1.default.get(url, { headers });
    }
    async postRequest(url, data) {
        const headers = {
            ...this.getHeader(),
            'x-csrftoken': 'pUl2LpVnNJeTgLC',
        };
        const queryString = Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
        return await axios_1.default.post(`${this.getBaseFullBaseUrl}/clips/user/`, queryString, { headers });
    }
    async getFeed(userId, max_id) {
        const maxId = max_id ? `&max_id=${max_id}` : '';
        const url = `https://www.instagram.com/api/v1/feed/user/${userId}/?count=12${maxId}`;
        return await this.sendRequest(url);
    }
    async getClips(userId, max_id) {
        const maxId = max_id ? `&max_id=${max_id}` : '';
        const url = `${this.getBaseFullBaseUrl}/clips/user`;
        return await this.postRequest(url, {
            'include_feed_video': true,
            'page_size': 12,
            'target_user_id': userId,
        });
    }
    get getBaseFullBaseUrl() {
        return `${this.BASE_URL}/${this.VERSION_API}`;
    }
}
exports.RequestInsta = RequestInsta;
