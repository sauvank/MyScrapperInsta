"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioLink = void 0;
class BioLink {
    constructor(bioLinks) {
        this._title = "";
        this._lynxUrl = "";
        this._url = "";
        this._linkType = "";
        this._title = bioLinks.title;
        this._lynxUrl = bioLinks.lynx_url;
        this._url = bioLinks.url;
        this._linkType = bioLinks.link_type;
    }
    get title() {
        return this._title;
    }
    get lynxUrl() {
        return this._lynxUrl;
    }
    get url() {
        return this._url;
    }
    get linkType() {
        return this._linkType;
    }
}
exports.BioLink = BioLink;
