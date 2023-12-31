import { InstagramUser } from "./types/insta";
import { BioLink } from "./BioLink";
import { InstagramVideo } from "./mediaVideo/InstagramVideo";
import { InstagramTimelineMediaPicture } from "./mediaPicture/InstagramTimelineMediaPicture";
import { RequestInsta } from "./RequestInsta";
import { Feed } from "./Feed/Feed";
import { Clip } from "./Clip/Clip";
export declare class User {
    private pages;
    private agentType;
    private biography;
    private bioLinks;
    private fb_profile_biolink;
    private biography_with_entities;
    private _blockedByViewer;
    private _restrictedByViewer;
    private _countryBlock;
    private _eimuId;
    private _externalUrl;
    private _externalUrlLinkshimmed;
    private fbid;
    private followedByViewer;
    private edgeFollow;
    private followsViewer;
    private fullName;
    private groupMetadata;
    private hasArEffects;
    private hasClips;
    private hasGuides;
    private hasChannel;
    private hasBlockedViewer;
    private highlightReelCount;
    private hasRequestedViewer;
    private hideLikeAndViewCounts;
    private id;
    private isBusinessAccount;
    private isProfessionalAccount;
    private isSupervisionEnabled;
    private isGuardianOfViewer;
    private isSupervisedByViewer;
    private isSupervisedUser;
    private isEmbedsDisabled;
    private isJoinedRecently;
    private guardianId;
    private businessAddressJson;
    private businessContactMethod;
    private businessEmail;
    private businessPhoneNumber;
    private businessCategoryName;
    private overallCategoryName;
    private categoryEnum;
    private categoryName;
    private isPrivate;
    private isVerified;
    private isVerifiedByMv4b;
    private isRegulatedC18;
    private edgeMutualFollowedBy;
    private pinnedChannelsListCount;
    private profilePicUrl;
    private profilePicUrlHd;
    private requestedByViewer;
    private shouldShowCategory;
    private shouldShowPublicContacts;
    private showAccountTransparencyDetails;
    private transparencyLabel;
    private transparencyProduct;
    private username;
    private connectedFbPage;
    private pronouns;
    private edge_felix_video_timeline;
    private edge_owner_to_timeline_media;
    private scrapper;
    constructor(user: InstagramUser, scrapper: RequestInsta);
    get getAgentType(): any;
    get getBiography(): string;
    get getBioLinks(): BioLink[];
    get getFbProfileBiolink(): null;
    get getBiographyWithEntities(): {
        raw_text: string;
        entities: [];
    };
    get blockedByViewer(): boolean;
    get restrictedByViewer(): any;
    get countryBlock(): boolean;
    get eimuId(): string;
    get externalUrl(): string;
    get externalUrlLinkshimmed(): string;
    get getFbid(): string;
    get getFollowedByViewer(): boolean;
    get getEdgeFollow(): {
        count: number;
    };
    get getFollowsViewer(): boolean;
    get getFullName(): string;
    get getGroupMetadata(): null;
    get getHasArEffects(): boolean;
    get getHasClips(): boolean;
    get getHasGuides(): boolean;
    get getHasChannel(): boolean;
    get getHasBlockedViewer(): boolean;
    get getHighlightReelCount(): number;
    get getHasRequestedViewer(): boolean;
    get getHideLikeAndViewCounts(): boolean;
    get getId(): string;
    get getIsBusinessAccount(): boolean;
    get getIsProfessionalAccount(): boolean;
    get getIsSupervisionEnabled(): boolean;
    get getIsGuardianOfViewer(): boolean;
    get getIsSupervisedByViewer(): boolean;
    get getIsSupervisedUser(): boolean;
    get getIsEmbedsDisabled(): boolean;
    get getIsJoinedRecently(): boolean;
    get getGuardianId(): null;
    get getBusinessAddressJson(): string;
    get getBusinessContactMethod(): string;
    get getBusinessEmail(): null;
    get getBusinessPhoneNumber(): null;
    get getBusinessCategoryName(): null;
    get getOverallCategoryName(): null;
    get getCategoryEnum(): null;
    get getCategoryName(): string;
    get getIsPrivate(): boolean;
    get getIsVerified(): boolean;
    get getIsVerifiedByMv4b(): boolean;
    get getIsRegulatedC18(): boolean;
    get getEdgeMutualFollowedBy(): {
        count: number;
        edges: any[];
    };
    get getPinnedChannelsListCount(): number;
    get getProfilePicUrl(): string;
    get getProfilePicUrlHd(): string;
    get sendRequestedByViewer(): boolean;
    get getShouldShowCategory(): boolean;
    get getShouldShowPublicContacts(): boolean;
    get getShowAccountTransparencyDetails(): boolean;
    get getTransparencyLabel(): null;
    get getTransparencyProduct(): string;
    get getUsername(): string;
    get getConnectedFbPage(): null;
    get getPronouns(): string[];
    get getVideotimeline(): InstagramVideo;
    get getPicturetimeline(): InstagramTimelineMediaPicture;
    getFeed(page?: number): Promise<Feed>;
    getFeedPage(page: number): Promise<Feed>;
    getAllFeedPages(): Promise<Feed[]>;
    getClips(): Promise<{
        getAllTypes: Clip[];
        first: Clip;
    }[]>;
}
