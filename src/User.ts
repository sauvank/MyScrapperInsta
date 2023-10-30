import {InstaBioLink, InstaCallBack, InstagramUser,IInstagramVideo} from "./types/insta";
import {BioLink} from "./BioLink";
import {InstagramVideo} from "./mediaVideo/InstagramVideo";
import {InstagramMediaNode} from "./mediaPicture/InstagramMediaNode";
import {InstagramTimelineMediaPicture} from "./mediaPicture/InstagramTimelineMediaPicture";


/**
 * Class representing an Instagram user.
 */
export class User{
    private agentType: any;
    private biography: string;
    private bioLinks: BioLink[];
    private fb_profile_biolink: null;
    private biography_with_entities: { raw_text: string; entities: [] };
    private _blockedByViewer: boolean = false;
    private _restrictedByViewer: any = null;
    private _countryBlock: boolean = false;
    private _eimuId: string = "";
    private _externalUrl: string = "";
    private _externalUrlLinkshimmed: string = "";

    private fbid: string;
    private followedByViewer: boolean;
    private edgeFollow: { count: number };
    private followsViewer: boolean;
    private fullName: string;
    private groupMetadata: null;
    private hasArEffects: boolean;
    private hasClips: boolean;
    private hasGuides: boolean;
    private hasChannel: boolean;
    private hasBlockedViewer: boolean;
    private highlightReelCount: number;
    private hasRequestedViewer: boolean;
    private hideLikeAndViewCounts: boolean;
    private id: string;
    private isBusinessAccount: boolean;
    private isProfessionalAccount: boolean;
    private isSupervisionEnabled: boolean;
    private isGuardianOfViewer: boolean;
    private isSupervisedByViewer: boolean;
    private isSupervisedUser: boolean;
    private isEmbedsDisabled: boolean;
    private isJoinedRecently: boolean;
    private guardianId: null;
    private businessAddressJson: string;
    private businessContactMethod: string;
    private businessEmail: null;
    private businessPhoneNumber: null;
    private businessCategoryName: null;
    private overallCategoryName: null;
    private categoryEnum: null;
    private categoryName: string;
    private isPrivate: boolean;
    private isVerified: boolean;
    private isVerifiedByMv4b: boolean;
    private isRegulatedC18: boolean;
    private edgeMutualFollowedBy: { count: number, edges: any[] };
    private pinnedChannelsListCount: number;
    private profilePicUrl: string;
    private profilePicUrlHd: string;
    private requestedByViewer: boolean;
    private shouldShowCategory: boolean;
    private shouldShowPublicContacts: boolean;
    private showAccountTransparencyDetails: boolean;
    private transparencyLabel: null;
    private transparencyProduct: string;
    private username: string;
    private connectedFbPage: null;
    private pronouns: string[];
    private edge_felix_video_timeline:InstagramVideo;
    private edge_owner_to_timeline_media: InstagramTimelineMediaPicture;


    /**
     * Constructor for the User class.
     * @param user - Instagram user data.
     */
    constructor(user: InstagramUser) {
        this.agentType = user.ai_agent_type;
        this.biography = user.biography;
        this.bioLinks = user.bio_links.map((bio: InstaBioLink) => new BioLink(bio));
        this.fb_profile_biolink = user.fb_profile_biolink;
        this.biography_with_entities = user.biography_with_entities;

        this._blockedByViewer = user.blocked_by_viewer || false;
        this._restrictedByViewer = user.restricted_by_viewer || null;
        this._countryBlock = user.country_block || false;
        this._eimuId = user.eimu_id || "";
        this._externalUrl = user.external_url || "";
        this._externalUrlLinkshimmed = user.external_url_linkshimmed || "";

        this.fbid = user.fbid || "";
        this.followedByViewer = user.followed_by_viewer || false;
        this.edgeFollow = user.edge_follow || { count: 0 };
        this.followsViewer = user.follows_viewer || false;
        this.fullName = user.full_name || "";
        this.groupMetadata = user.group_metadata || null;
        this.hasArEffects = user.has_ar_effects || false;
        this.hasClips = user.has_clips || false;
        this.hasGuides = user.has_guides || false;
        this.hasChannel = user.has_channel || false;
        this.hasBlockedViewer = user.has_blocked_viewer || false;
        this.highlightReelCount = user.highlight_reel_count || 0;
        this.hasRequestedViewer = user.has_requested_viewer || false;
        this.hideLikeAndViewCounts = user.hide_like_and_view_counts || false;
        this.id = user.id || "";
        this.isBusinessAccount = user.is_business_account || false;
        this.isProfessionalAccount = user.is_professional_account || false;
        this.isSupervisionEnabled = user.is_supervision_enabled || false;
        this.isGuardianOfViewer = user.is_guardian_of_viewer || false;
        this.isSupervisedByViewer = user.is_supervised_by_viewer || false;
        this.isSupervisedUser = user.is_supervised_user || false;
        this.isEmbedsDisabled = user.is_embeds_disabled || false;
        this.isJoinedRecently = user.is_joined_recently || false;
        this.guardianId = user.guardian_id || null;
        this.businessAddressJson = user.business_address_json || "";
        this.businessContactMethod = user.business_contact_method || "";
        this.businessEmail = user.business_email || null;
        this.businessPhoneNumber = user.business_phone_number || null;
        this.businessCategoryName = user.business_category_name || null;
        this.overallCategoryName = user.overall_category_name || null;
        this.categoryEnum = user.category_enum || null;
        this.categoryName = user.category_name || "";
        this.isPrivate = user.is_private || false;
        this.isVerified = user.is_verified || false;
        this.isVerifiedByMv4b = user.is_verified_by_mv4b || false;
        this.isRegulatedC18 = user.is_regulated_c18 || false;
        this.edgeMutualFollowedBy = user.edge_mutual_followed_by || { count: 0, edges: [] };
        this.pinnedChannelsListCount = user.pinned_channels_list_count || 0;
        this.profilePicUrl = user.profile_pic_url || "";
        this.profilePicUrlHd = user.profile_pic_url_hd || "";
        this.requestedByViewer = user.requested_by_viewer || false;
        this.shouldShowCategory = user.should_show_category || false;
        this.shouldShowPublicContacts = user.should_show_public_contacts || true;
        this.showAccountTransparencyDetails = user.show_account_transparency_details || true;
        this.transparencyLabel = user.transparency_label || null;
        this.transparencyProduct = user.transparency_product || "STATE_CONTROLLED_MEDIA";
        this.username = user.username || "";
        this.connectedFbPage = user.connected_fb_page || null;
        this.pronouns = user.pronouns || [];
        this.edge_felix_video_timeline = new InstagramVideo(user.edge_felix_video_timeline)
        this.edge_owner_to_timeline_media = new InstagramTimelineMediaPicture(user.edge_owner_to_timeline_media)
    }

    /**
     * Gets the agent type of the user.
     * @returns The agent type of the user.
     */
    get getAgentType(): any {
        return this.agentType;
    }

    get getBiography(): string {
        return this.biography;
    }

    get getBioLinks(): BioLink[] {
        return this.bioLinks;
    }

    get getFbProfileBiolink(): null {
        return this.fb_profile_biolink;
    }

    get getBiographyWithEntities(): { raw_text: string; entities: [] } {
        return this.biography_with_entities;
    }

    get blockedByViewer(): boolean {
        return this._blockedByViewer;
    }

    get restrictedByViewer(): any {
        return this._restrictedByViewer;
    }

    get countryBlock(): boolean {
        return this._countryBlock;
    }

    get eimuId(): string {
        return this._eimuId;
    }

    get externalUrl(): string {
        return this._externalUrl;
    }

    get externalUrlLinkshimmed(): string {
        return this._externalUrlLinkshimmed;
    }

    get getFbid(): string {
        return this.fbid;
    }

    get getFollowedByViewer(): boolean {
        return this.followedByViewer;
    }

    get getEdgeFollow(): { count: number } {
        return this.edgeFollow;
    }

    get getFollowsViewer(): boolean {
        return this.followsViewer;
    }

    get getFullName(): string {
        return this.fullName;
    }

    get getGroupMetadata(): null {
        return this.groupMetadata;
    }

    get getHasArEffects(): boolean {
        return this.hasArEffects;
    }

    get getHasClips(): boolean {
        return this.hasClips;
    }

    get getHasGuides(): boolean {
        return this.hasGuides;
    }

    get getHasChannel(): boolean {
        return this.hasChannel;
    }

    get getHasBlockedViewer(): boolean {
        return this.hasBlockedViewer;
    }

    get getHighlightReelCount(): number {
        return this.highlightReelCount;
    }

    get getHasRequestedViewer(): boolean {
        return this.hasRequestedViewer;
    }

    get getHideLikeAndViewCounts(): boolean {
        return this.hideLikeAndViewCounts;
    }

    get getId(): string {
        return this.id;
    }

    get getIsBusinessAccount(): boolean {
        return this.isBusinessAccount;
    }

    get getIsProfessionalAccount(): boolean {
        return this.isProfessionalAccount;
    }

    get getIsSupervisionEnabled(): boolean {
        return this.isSupervisionEnabled;
    }

    get getIsGuardianOfViewer(): boolean {
        return this.isGuardianOfViewer;
    }

    get getIsSupervisedByViewer(): boolean {
        return this.isSupervisedByViewer;
    }

    get getIsSupervisedUser(): boolean {
        return this.isSupervisedUser;
    }

    get getIsEmbedsDisabled(): boolean {
        return this.isEmbedsDisabled;
    }

    get getIsJoinedRecently(): boolean {
        return this.isJoinedRecently;
    }

    get getGuardianId(): null {
        return this.guardianId;
    }

    get getBusinessAddressJson(): string {
        return this.businessAddressJson;
    }

    get getBusinessContactMethod(): string {
        return this.businessContactMethod;
    }

    get getBusinessEmail(): null {
        return this.businessEmail;
    }

    get getBusinessPhoneNumber(): null {
        return this.businessPhoneNumber;
    }

    get getBusinessCategoryName(): null {
        return this.businessCategoryName;
    }

    get getOverallCategoryName(): null {
        return this.overallCategoryName;
    }

    get getCategoryEnum(): null {
        return this.categoryEnum;
    }

    get getCategoryName(): string {
        return this.categoryName;
    }

    get getIsPrivate(): boolean {
        return this.isPrivate;
    }

    get getIsVerified(): boolean {
        return this.isVerified;
    }

    get getIsVerifiedByMv4b(): boolean {
        return this.isVerifiedByMv4b;
    }

    get getIsRegulatedC18(): boolean {
        return this.isRegulatedC18;
    }

    get getEdgeMutualFollowedBy(): { count: number, edges: any[] } {
        return this.edgeMutualFollowedBy;
    }

    get getPinnedChannelsListCount(): number {
        return this.pinnedChannelsListCount;
    }

    get getProfilePicUrl(): string {
        return this.profilePicUrl;
    }

    get getProfilePicUrlHd(): string {
        return this.profilePicUrlHd;
    }

    get getRequestedByViewer(): boolean {
        return this.requestedByViewer;
    }

    get getShouldShowCategory(): boolean {
        return this.shouldShowCategory;
    }

    get getShouldShowPublicContacts(): boolean {
        return this.shouldShowPublicContacts;
    }

    get getShowAccountTransparencyDetails(): boolean {
        return this.showAccountTransparencyDetails;
    }

    get getTransparencyLabel(): null {
        return this.transparencyLabel;
    }

    get getTransparencyProduct(): string {
        return this.transparencyProduct;
    }

    get getUsername(): string {
        return this.username;
    }

    get getConnectedFbPage(): null {
        return this.connectedFbPage;
    }

    get getPronouns(): string[] {
        return this.pronouns;
    }

    get getVideotimeline():InstagramVideo{
        return this.edge_felix_video_timeline
    }

    get getPicturetimeline():InstagramTimelineMediaPicture{
        return this.edge_owner_to_timeline_media
    }
}