import { IUserNode } from "../types/insta";
export declare class InstagramTaggedUser {
    private user;
    private x;
    private y;
    constructor(taggedUserData: IUserNode);
    get getUser(): {
        full_name: string;
        followed_by_viewer: boolean;
        id: string;
        is_verified: boolean;
        profile_pic_url: string;
        username: string;
    };
    get getX(): number;
    get getY(): number;
}
