"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const BioLink_1 = require("./BioLink");
const InstagramVideo_1 = require("./mediaVideo/InstagramVideo");
const InstagramTimelineMediaPicture_1 = require("./mediaPicture/InstagramTimelineMediaPicture");
const Feed_1 = require("./Feed/Feed");
class User {
    constructor(user, scrapper) {
        this.pages = [];
        this._blockedByViewer = false;
        this._restrictedByViewer = null;
        this._countryBlock = false;
        this._eimuId = "";
        this._externalUrl = "";
        this._externalUrlLinkshimmed = "";
        this.scrapper = scrapper;
        this.agentType = user.ai_agent_type;
        this.biography = user.biography;
        this.bioLinks = user.bio_links.map((bio) => new BioLink_1.BioLink(bio));
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
        this.edge_felix_video_timeline = new InstagramVideo_1.InstagramVideo(user.edge_felix_video_timeline, scrapper);
        this.edge_owner_to_timeline_media = new InstagramTimelineMediaPicture_1.InstagramTimelineMediaPicture(user.id, user.edge_owner_to_timeline_media, scrapper);
    }
    get getAgentType() {
        return this.agentType;
    }
    get getBiography() {
        return this.biography;
    }
    get getBioLinks() {
        return this.bioLinks;
    }
    get getFbProfileBiolink() {
        return this.fb_profile_biolink;
    }
    get getBiographyWithEntities() {
        return this.biography_with_entities;
    }
    get blockedByViewer() {
        return this._blockedByViewer;
    }
    get restrictedByViewer() {
        return this._restrictedByViewer;
    }
    get countryBlock() {
        return this._countryBlock;
    }
    get eimuId() {
        return this._eimuId;
    }
    get externalUrl() {
        return this._externalUrl;
    }
    get externalUrlLinkshimmed() {
        return this._externalUrlLinkshimmed;
    }
    get getFbid() {
        return this.fbid;
    }
    get getFollowedByViewer() {
        return this.followedByViewer;
    }
    get getEdgeFollow() {
        return this.edgeFollow;
    }
    get getFollowsViewer() {
        return this.followsViewer;
    }
    get getFullName() {
        return this.fullName;
    }
    get getGroupMetadata() {
        return this.groupMetadata;
    }
    get getHasArEffects() {
        return this.hasArEffects;
    }
    get getHasClips() {
        return this.hasClips;
    }
    get getHasGuides() {
        return this.hasGuides;
    }
    get getHasChannel() {
        return this.hasChannel;
    }
    get getHasBlockedViewer() {
        return this.hasBlockedViewer;
    }
    get getHighlightReelCount() {
        return this.highlightReelCount;
    }
    get getHasRequestedViewer() {
        return this.hasRequestedViewer;
    }
    get getHideLikeAndViewCounts() {
        return this.hideLikeAndViewCounts;
    }
    get getId() {
        return this.id;
    }
    get getIsBusinessAccount() {
        return this.isBusinessAccount;
    }
    get getIsProfessionalAccount() {
        return this.isProfessionalAccount;
    }
    get getIsSupervisionEnabled() {
        return this.isSupervisionEnabled;
    }
    get getIsGuardianOfViewer() {
        return this.isGuardianOfViewer;
    }
    get getIsSupervisedByViewer() {
        return this.isSupervisedByViewer;
    }
    get getIsSupervisedUser() {
        return this.isSupervisedUser;
    }
    get getIsEmbedsDisabled() {
        return this.isEmbedsDisabled;
    }
    get getIsJoinedRecently() {
        return this.isJoinedRecently;
    }
    get getGuardianId() {
        return this.guardianId;
    }
    get getBusinessAddressJson() {
        return this.businessAddressJson;
    }
    get getBusinessContactMethod() {
        return this.businessContactMethod;
    }
    get getBusinessEmail() {
        return this.businessEmail;
    }
    get getBusinessPhoneNumber() {
        return this.businessPhoneNumber;
    }
    get getBusinessCategoryName() {
        return this.businessCategoryName;
    }
    get getOverallCategoryName() {
        return this.overallCategoryName;
    }
    get getCategoryEnum() {
        return this.categoryEnum;
    }
    get getCategoryName() {
        return this.categoryName;
    }
    get getIsPrivate() {
        return this.isPrivate;
    }
    get getIsVerified() {
        return this.isVerified;
    }
    get getIsVerifiedByMv4b() {
        return this.isVerifiedByMv4b;
    }
    get getIsRegulatedC18() {
        return this.isRegulatedC18;
    }
    get getEdgeMutualFollowedBy() {
        return this.edgeMutualFollowedBy;
    }
    get getPinnedChannelsListCount() {
        return this.pinnedChannelsListCount;
    }
    get getProfilePicUrl() {
        return this.profilePicUrl;
    }
    get getProfilePicUrlHd() {
        return this.profilePicUrlHd;
    }
    get getRequestedByViewer() {
        return this.requestedByViewer;
    }
    get getShouldShowCategory() {
        return this.shouldShowCategory;
    }
    get getShouldShowPublicContacts() {
        return this.shouldShowPublicContacts;
    }
    get getShowAccountTransparencyDetails() {
        return this.showAccountTransparencyDetails;
    }
    get getTransparencyLabel() {
        return this.transparencyLabel;
    }
    get getTransparencyProduct() {
        return this.transparencyProduct;
    }
    get getUsername() {
        return this.username;
    }
    get getConnectedFbPage() {
        return this.connectedFbPage;
    }
    get getPronouns() {
        return this.pronouns;
    }
    get getVideotimeline() {
        return this.edge_felix_video_timeline;
    }
    get getPicturetimeline() {
        return this.edge_owner_to_timeline_media;
    }
    async getFeed(page = 1) {
        let { data } = await this.scrapper.getFeed(this.id);
        let feed = new Feed_1.Feed(data);
        this.pages[0] = feed;
        if (page && page >= 2) {
            for (let itePage = 1; itePage < page; itePage++) {
                if (this.pages[itePage]) {
                    continue;
                }
                let { data } = await this.scrapper.getFeed(this.id, feed.getNextMaxId);
                feed = new Feed_1.Feed(data);
                this.pages[itePage] = new Feed_1.Feed(data);
            }
        }
        return this.pages[page - 1];
    }
    async getFeedPage(page) {
        if (this.pages[page - 1]) {
            return this.pages[page - 1];
        }
        return await this.getFeed(page);
    }
}
exports.User = User;
