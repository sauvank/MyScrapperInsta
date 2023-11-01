import {IVideoVersion} from "../types/insta";

export class Clip{
    // https://www.instagram.com/api/v1/clips/user/
    private clip:  IVideoVersion ;

    constructor(clip: IVideoVersion) {
        this.clip = clip;
    }

    get getType(){
        return this.clip.type
    }

    get getWidth(){
        return this.clip.width
    }

    get getHeight(){
        return this.clip.height
    }

    get getUrl(){
        return this.clip.url
    }
    get getId(){
        return this.clip.id
    }

}