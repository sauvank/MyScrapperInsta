import { VideoNode } from "./VideoNode";
export declare class InstagramVideo {
    private count;
    private pageInfo;
    private edges;
    constructor(videoData: any);
    get getCount(): number;
    get getPageInfo(): {
        has_next_page: boolean;
        end_cursor: string;
    };
    get getVideos(): VideoNode[];
}
