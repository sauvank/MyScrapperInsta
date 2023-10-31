import {VideoNode} from "./VideoNode";
import {RequestInsta} from "../RequestInsta";

export class InstagramVideo {
    private count: number;
    private pageInfo: { has_next_page: boolean; end_cursor: string };
    private edges: VideoNode[];

    constructor(videoData: any, scrapper:RequestInsta) {
        this.count = videoData.count || 0;
        this.pageInfo = videoData.page_info || { has_next_page: false, end_cursor: "" };
        this.edges = videoData.edges.map((edge: any) => new VideoNode(edge.node));
    }

    get getCount(): number {
        return this.count;
    }

    get getPageInfo(): { has_next_page: boolean; end_cursor: string } {
        return this.pageInfo;
    }

    get getVideos(): VideoNode[] {
        return this.edges;
    }
}