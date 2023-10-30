import {IUserNode} from "../types/insta";

export class InstagramTaggedUser {
    private user: {
        full_name: string;
        followed_by_viewer: boolean;
        id: string;
        is_verified: boolean;
        profile_pic_url: string;
        username: string;
    };
    private x: number;
    private y: number;

    constructor(taggedUserData: IUserNode) {
        this.user = taggedUserData.user || {
            full_name: "",
            followed_by_viewer: false,
            id: "",
            is_verified: false,
            profile_pic_url: "",
            username: "",
        };
        this.x = taggedUserData.x || 0;
        this.y = taggedUserData.y || 0;
    }

    get getUser(): {
        full_name: string;
        followed_by_viewer: boolean;
        id: string;
        is_verified: boolean;
        profile_pic_url: string;
        username: string;
    } {
        return this.user;
    }

    get getX(): number {
        return this.x;
    }

    get getY(): number {
        return this.y;
    }
}