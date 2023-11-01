#MyScrapperInsta

WORK IN PROGRESS

* npm install :

    <code>
       npm i @lucas_monroe/my_scrapper_insta
    </code>


* Get ds_user_id and sessionid token, F12 + go to Application => Cookies => instagram.com
  

<img src="https://image.noelshack.com/fichiers/2023/44/3/1698847250-exemple.png">


* Exemple implement Typescript
```
// IMPORT DEPS
import axios from 'axios';
import {ScrapperInsta} from "@lucas_monroe/my_scrapper_insta";
import {InstaCallBack, NodeEdgeFelixVideo} from "@lucas_monroe/my_scrapper_insta/lib/types/insta";


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
        const feed = await user.getFeed()
        const page2 = await user.getFeedPage(2)
        const page3 = await user.getFeedPage(3)
        const page1 = await user.getFeedPage(1)

        /**
         * Get all media with all resolution for each
         */
        const getAllMediaWithAllResolution= feed.getItems.map(item => item.getMedias)

        /**
         * Get Only the best media resolution for each
         */
        const bestForEach= feed.getItems.map(item => item.getBestResolution.getUrl)

        /**
         * Get With multiple page
         */
        console.log([
            ...feed.getItems.map(item => item.getBestResolution.getUrl),
            ...page2.getItems.map(item => item.getBestResolution.getUrl),
            ...page3.getItems.map(item => item.getBestResolution.getUrl),
            ...page1.getItems.map(item => item.getBestResolution.getUrl)
        ])
        
        /**
         * Get all Media and display only urls
         */

        const pages = await user.getAllPages()
        const urls = pages.map(page => page.getItems.map(item => item.getBestResolution.getUrl)).flat();
        console.log(urls)
    }
}

new Exemple().run();
```

Exemple js classic

```
var {ScrapperInsta} = require("@lucas_monroe/my_scrapper_insta")

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

new ScrapperInsta(conf).getUserMedia('kleinerpixel').then((user) => {
const pictures = user.getPicturetimeline.getPictures
const videos = user.getVideotimeline.getVideos
const urls = [...pictures,...videos].flatMap((media) => {
return media.getDisplayUrl
})
console.log(urls)
})

```

### For Update / Local tests

* Install dependences

    <code>
    npm install
    </code>


* build :

    <code>
    npm run build
    </code>


* generated doc is in folder : 
<code>
./docs/index.html
</code>


* For update doc run

    <code>
    npm run doc
    </code>