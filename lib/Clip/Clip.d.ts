import { IVideoVersion } from "../types/insta";
export declare class Clip {
    private clip;
    constructor(clip: IVideoVersion);
    get getType(): number;
    get getWidth(): number;
    get getHeight(): number;
    get getUrl(): number;
    get getId(): number;
}
