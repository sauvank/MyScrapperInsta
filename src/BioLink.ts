import {InstaBioLink} from "./types/insta";

export class BioLink{
    private _title: string = "";
    private _lynxUrl: string = "";
    private _url: string = "";
    private _linkType: string = "";

    constructor(bioLinks:InstaBioLink) {
        this._title = bioLinks.title;
        this._lynxUrl = bioLinks.lynx_url;
        this._url = bioLinks.url;
        this._linkType = bioLinks.link_type;
    }

    get title(): string {
        return this._title;
    }

    get lynxUrl(): string {
        return this._lynxUrl;
    }

    get url(): string {
        return this._url;
    }

    get linkType(): string {
        return this._linkType;
    }
}