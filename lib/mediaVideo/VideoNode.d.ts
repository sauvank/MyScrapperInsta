import { CaptionEdge } from "./CaptionEdge";
export declare class VideoNode {
    private __typename;
    private id;
    private shortcode;
    private dimensions;
    private displayUrl;
    private owner;
    private isVideo;
    private videoUrl;
    private videoViewCount;
    private edgeMediaToCaption;
    constructor(nodeData: any);
    get getTypename(): string;
    get getId(): string;
    get getShortcode(): string;
    get getDimensions(): {
        height: number;
        width: number;
    };
    get getDisplayUrl(): string;
    get getOwner(): {
        id: string;
        username: string;
    };
    get getIsVideo(): boolean;
    get getVideoUrl(): string;
    get getVideoViewCount(): number;
    get getEdgeMediaToCaption(): {
        edges: CaptionEdge[];
    };
}
