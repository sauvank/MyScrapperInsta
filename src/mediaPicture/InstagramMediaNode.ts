import {InstagramTaggedUser} from "./InstagramTaggedUser";
import {INode, IUserEdge} from "../types/insta";

export class InstagramMediaNode {
    private typename: string;
    private id: string;
    private shortcode: string;
    private dimensions: { height: number; width: number };
    private displayUrl: string;
    private taggedUsers: InstagramTaggedUser[];

    constructor(nodeData: INode) {
        this.typename = nodeData.__typename || "";
        this.id = nodeData.id || "";
        this.shortcode = nodeData.shortcode || "";
        this.dimensions = nodeData.dimensions || { height: 0, width: 0 };
        this.displayUrl = nodeData.display_url || "";
        this.taggedUsers = nodeData.edge_media_to_tagged_user.edges.map(
            (taggedUser: IUserEdge) => new InstagramTaggedUser(taggedUser.node)
        );
    }

    get getTypename(): string {
        return this.typename;
    }

    get getId(): string {
        return this.id;
    }

    get getShortcode(): string {
        return this.shortcode;
    }

    get getDimensions(): { height: number; width: number } {
        return this.dimensions;
    }

    get getDisplayUrl(): string {
        return this.displayUrl;
    }

    get getTaggedUsers(): InstagramTaggedUser[] {
        return this.taggedUsers;
    }
}
