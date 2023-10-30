import { InstaBioLink } from "./types/insta";
export declare class BioLink {
    private _title;
    private _lynxUrl;
    private _url;
    private _linkType;
    constructor(bioLinks: InstaBioLink);
    get title(): string;
    get lynxUrl(): string;
    get url(): string;
    get linkType(): string;
}
