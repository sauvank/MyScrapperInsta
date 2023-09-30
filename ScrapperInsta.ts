import axios from 'axios';
import {confInterface, InstaCallBack, InstagramUser} from "./Type";


export class ScrapperInsta{

    private BASE_URL = 'https://www.instagram.com/api';
    private VERSION_API = 'v1'

    private conf: confInterface;

    constructor(conf: confInterface) {
        this.conf = conf;
    }

    private getHeader(){
        return  {
            'authority': 'www.instagram.com',
            'accept': '*/*',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie':  `ds_user_id=${this.conf.cookie.ds_user_id}; sessionid=${this.conf.cookie.sessionid};`,
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

    private  async sendRequest(url: string) {
        const headers = this.getHeader();
        return await  axios.get(url, { headers })
    }

    private getBaseFullBaseUrl(){
        return `${this.BASE_URL}/${this.VERSION_API}`;
    }

    public async getUserMedia(username: string): Promise<InstaCallBack> {
        const path = `users/web_profile_info/?username=${username}`;
        const {data} =  await this.sendRequest(`${this.getBaseFullBaseUrl()}/${path}`)
        return  await data;
    }
}

