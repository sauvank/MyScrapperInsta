import {IEdgeOwnerToTimelineMedia, INodeEdge} from "../types/insta";
import {InstagramMediaNode} from "./InstagramMediaNode";
import {RequestInsta} from "../RequestInsta";
import {Feed} from "../Feed/Feed";

export class InstagramTimelineMediaPicture {
    private count: number;
    private pageInfo: { has_next_page: boolean; end_cursor: string };
    private nodes: InstagramMediaNode[];
    private scrapper: RequestInsta;
    private pages:InstagramTimelineMediaPicture[] = [];
    private userId:string;
    constructor(userId:string,timelineMediaData: IEdgeOwnerToTimelineMedia, scrapper:RequestInsta) {
        this.count = timelineMediaData.count || 0;
        this.pageInfo = timelineMediaData.page_info || { has_next_page: false, end_cursor: "" };
        this.nodes = timelineMediaData.edges.map((edge: INodeEdge) => new InstagramMediaNode(edge.node));
        this.pages.push(this)
        this.scrapper = scrapper;
        this.userId = userId
    }

    get getCount(): number {
        return this.count;
    }

    get getPageInfo(): { has_next_page: boolean; end_cursor: string } {
        return this.pageInfo;
    }

    get getPictures(): InstagramMediaNode[] {
        return this.nodes;
    }
}
