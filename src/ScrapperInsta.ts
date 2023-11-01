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

        try {
            const {data} =  await this.sendRequest(`${this.getBaseFullBaseUrl}/${path}`)
            return new User(data.data.user, this);
        }catch (error){
            console.error('Error fetching clips, you may need to change the cookie sessionid:', error.message);
            throw new Error('Failed to fetch clips, you may need to change the cookie sessionid');
        }

    }
}

