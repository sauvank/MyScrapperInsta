#MyScrapperInsta

WORK IN PROGRESS

* npm install :

    <code>
       npm i @lucas_monroe/my_scrapper_insta
    </code>



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
        
        //INIT CLASS + TRY TO GET DATA FROM INSTA 'kleinerpixel'
        const  result:InstaCallBack = await new ScrapperInsta(conf).getUserMedia('kleinerpixel')

        //DISPLAY ALL URLS FROM POST VIDEO OR PICTURE OF USER
         const user = await new ScrapperInsta(conf).getUserMedia('kleinerpixel')

        const pictures = user.getPicturetimeline.getPictures
        const videos = user.getVideotimeline.getVideos
            const urls = [...pictures,...videos].flatMap((media) => {
                return media.getDisplayUrl
            })

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
    tsc
    </code>


* generated doc is in folder : 
<code>
./docs/index.html
</code>


* For update doc run

    <code>
    npm run doc
    </code>