#MyScrapperInsta

WORK IN PROGRESS


* Run : npm install


```

import axios from 'axios';
import {ScrapperInsta} from "./ScrapperInsta";
import {InstaCallBack, NodeEdgeFelixVideo} from "./Type";


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
        const  result:InstaCallBack = await new ScrapperInsta(conf).getUserMedia('kleinerpixel')

        //GET MEDIA POST BY USER
        const displayUrls =  result.data.user.edge_felix_video_timeline.edges.map((d:NodeEdgeFelixVideo) => {
            return d.node.display_url;
        })
        console.log(displayUrls)
    }
}

new Exemple().run();