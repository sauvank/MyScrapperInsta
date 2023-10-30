import {CaptionEdge} from "./CaptionEdge";

export class VideoNode {
    private __typename: string;
    private id: string;
    private shortcode: string;
    private dimensions: { height: number; width: number };
    private displayUrl: string;
    private owner: { id: string; username: string };
    private isVideo: boolean;
    private videoUrl: string;
    private videoViewCount: number;
    private edgeMediaToCaption: { edges: CaptionEdge[] };

    constructor(nodeData: any) {
        this.__typename = nodeData.__typename || "";
        this.id = nodeData.id || "";
        this.shortcode = nodeData.shortcode || "";
        this.dimensions = nodeData.dimensions || { height: 0, width: 0 };
        this.displayUrl = nodeData.display_url || "";
        this.owner = nodeData.owner || { id: "", username: "" };
        this.isVideo = nodeData.is_video || false;
        this.videoUrl = nodeData.video_url || "";
        this.videoViewCount = nodeData.video_view_count || 0;
        this.edgeMediaToCaption = nodeData.edge_media_to_caption || { edges: [] };
    }

    get getTypename(): string {
        return this.__typename;
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

    get getOwner(): { id: string; username: string } {
        return this.owner;
    }

    get getIsVideo(): boolean {
        return this.isVideo;
    }

    get getVideoUrl(): string {
        return this.videoUrl;
    }

    get getVideoViewCount(): number {
        return this.videoViewCount;
    }

    get getEdgeMediaToCaption(): { edges: CaptionEdge[] } {
        return this.edgeMediaToCaption;
    }
}