import axios from 'axios';
import {ScrapperInsta} from "../src/ScrapperInsta";
import {InstaCallBack, NodeEdgeFelixVideo} from "../src/types/insta";

export class Exemple{

    async run(){
        const  conf = {
            cookie: {
                // SET YOUR ds_user_id AND sessionid FROM COOKIE
                // F12 + application FOR SHOW THIS ( AFTER LOGIN INTO INSTAGRAM )
                ds_user_id:'XXXXXXXXXXXXX',
                sessionid:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            },
            header: {
                x_asbd_id: '129477',
                x_ig_app_id : '936619743392459'
            }
        }

         const user = await new ScrapperInsta(conf).getUserMedia('kleinerpixel')
        console.log(user.getBiography)
    }
}

new Exemple().run();