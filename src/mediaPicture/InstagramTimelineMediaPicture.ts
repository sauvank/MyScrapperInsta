import {IEdgeOwnerToTimelineMedia, INodeEdge} from "../types/insta";
import {InstagramMediaNode} from "./InstagramMediaNode";

export class InstagramTimelineMediaPicture {
    private count: number;
    private pageInfo: { has_next_page: boolean; end_cursor: string };
    private nodes: InstagramMediaNode[];

    constructor(timelineMediaData: IEdgeOwnerToTimelineMedia) {
        this.count = timelineMediaData.count || 0;
        this.pageInfo = timelineMediaData.page_info || { has_next_page: false, end_cursor: "" };
        this.nodes = timelineMediaData.edges.map((edge: INodeEdge) => new InstagramMediaNode(edge.node));
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
