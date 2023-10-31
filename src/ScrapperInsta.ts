import axios from 'axios';
import {InstaCallBack, InstagramUser} from "./types/insta";
import {confInterface} from "./types";
import {User} from "./User";
import {RequestInsta} from "./RequestInsta";


export class ScrapperInsta extends RequestInsta{



    private jsonBrut: object = {};

    constructor(conf: confInterface) {
        super(conf);
    }
    public async getUserMedia(username: string): Promise<User> {
        const path = `users/web_profile_info/?username=${username}`;
        const {data} =  await this.sendRequest(`${this.getBaseFullBaseUrl()}/${path}`)
        return new User(data.data.user, this);
    }
}

