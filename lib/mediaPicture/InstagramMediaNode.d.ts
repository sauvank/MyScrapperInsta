import { InstagramTaggedUser } from "./InstagramTaggedUser";
import { INode } from "../types/insta";
export declare class InstagramMediaNode {
    private typename;
    private id;
    private shortcode;
    private dimensions;
    private displayUrl;
    private taggedUsers;
    constructor(nodeData: INode);
    get getTypename(): string;
    get getId(): string;
    get getShortcode(): string;
    get getDimensions(): {
        height: number;
        width: number;
    };
    get getDisplayUrl(): string;
    get getTaggedUsers(): InstagramTaggedUser[];
}
