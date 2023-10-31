import { IEdgeOwnerToTimelineMedia } from "../types/insta";
import { InstagramMediaNode } from "./InstagramMediaNode";
import { RequestInsta } from "../RequestInsta";
export declare class InstagramTimelineMediaPicture {
    private count;
    private pageInfo;
    private nodes;
    private scrapper;
    private pages;
    private userId;
    constructor(userId: string, timelineMediaData: IEdgeOwnerToTimelineMedia, scrapper: RequestInsta);
    get getCount(): number;
    get getPageInfo(): {
        has_next_page: boolean;
        end_cursor: string;
    };
    get getPictures(): InstagramMediaNode[];
}
