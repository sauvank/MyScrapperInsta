import { IEdgeOwnerToTimelineMedia } from "../types/insta";
import { InstagramMediaNode } from "./InstagramMediaNode";
export declare class InstagramTimelineMediaPicture {
    private count;
    private pageInfo;
    private nodes;
    constructor(timelineMediaData: IEdgeOwnerToTimelineMedia);
    get getCount(): number;
    get getPageInfo(): {
        has_next_page: boolean;
        end_cursor: string;
    };
    get getPictures(): InstagramMediaNode[];
}
