export interface confInterface {
    cookie: {
        ds_user_id:string,
        sessionid:string,
    },
    header: {
        x_asbd_id:string,
        x_ig_app_id : string
    }
}


export interface InstaBioLink{
    title: '',
    lynx_url:string,
    url:string,
    link_type: string
}

export interface InstagramUser{
    ai_agent_type: null;
    biography: string;
    bio_links: InstaBioLink[];
    fb_profile_biolink: null;
    biography_with_entities: {
        raw_text: string,
        entities: []
    };
    blocked_by_viewer: boolean;
    restricted_by_viewer: boolean;
    country_block: boolean;
    eimu_id: string;
    external_url: string;
    external_url_linkshimmed: string;
    edge_followed_by: {
        count: number
    };
    fbid: string;
    followed_by_viewer: boolean;
    edge_follow: {
        count: number
    };
    follows_viewer: boolean;
    full_name: string;
    group_metadata: null;
    has_ar_effects: boolean;
    has_clips: boolean;
    has_guides: boolean;
    has_channel: boolean;
    has_blocked_viewer: boolean;
    highlight_reel_count: number;
    has_requested_viewer: boolean;
    hide_like_and_view_counts: boolean;
    id: string;
    is_business_account: boolean;
    is_professional_account: boolean;
    is_supervision_enabled: boolean;
    is_guardian_of_viewer: boolean;
    is_supervised_by_viewer: boolean;
    is_supervised_user: boolean;
    is_embeds_disabled: boolean;
    is_joined_recently: boolean;
    guardian_id: null;
    business_address_json: string;
    business_contact_method: string;
    business_email: null;
    business_phone_number: null;
    business_category_name: null;
    overall_category_name: null;
    category_enum: null;
    category_name: string;
    is_private: boolean;
    is_verified: boolean;
    is_verified_by_mv4b: boolean;
    is_regulated_c18: boolean;
    edge_mutual_followed_by: {
        count: number,
        edges: any[]
    };
    pinned_channels_list_count: number;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    requested_by_viewer: boolean;
    should_show_category: boolean;
    should_show_public_contacts: boolean;
    show_account_transparency_details: boolean;
    transparency_label: null;
    transparency_product: string;
    username: string;
    connected_fb_page: null;
    pronouns: any[]; // Replace 'any' with a more specific type if possible
    edge_felix_video_timeline: EdgeFelixVideoTimeLine; // Replace 'any' with a more specific type if possible
    edge_owner_to_timeline_media: any[]; // Replace 'any' with a more specific type if possible
    edge_saved_media: any[]; // Replace 'any' with a more specific type if possible
    edge_media_collections: any[]; // Replace 'any' with a more specific type if possible
}

export interface NodeData{
    __typename: string;
    id: string;
    shortcode: string;
    dimensions: any; // Replace 'any' with a more specific type if possible
    display_url: string;
    edge_media_to_tagged_user: any; // Replace 'any' with a more specific type if possible
    fact_check_overall_rating: null;
    fact_check_information: null;
    gating_info: null;
    sharing_friction_info: any; // Replace 'any' with a more specific type if possible
    media_overlay_info: null;
    media_preview: string;
    owner: any; // Replace 'any' with a more specific type if possible
    is_video: boolean;
    has_upcoming_event: boolean;
    accessibility_caption: null;
    dash_info: any; // Replace 'any' with a more specific type if possible
    has_audio: boolean;
    tracking_token: string;
    video_url: string;
    video_view_count: number;
    edge_media_to_caption: any; // Replace 'any' with a more specific type if possible
    edge_media_to_comment: any; // Replace 'any' with a more specific type if possible
    comments_disabled: boolean;
    taken_at_timestamp: number;
    edge_liked_by: any; // Replace 'any' with a more specific type if possible
    edge_media_preview_like: any; // Replace 'any' with a more specific type if possible
    location: null;
    nft_asset_info: null;
    thumbnail_src: string;
    thumbnail_resources: any[]; // Replace 'any' with a more specific type if possible
    felix_profile_grid_crop: null;
    coauthor_producers: any[];
    pinned_for_users: any[];
    viewer_can_reshare: boolean;
    encoding_status: null;
    is_published: boolean;
    product_type: 'feed';
    title: string;
    video_duration: number;
}

export interface EdgeFelixVideoTimeLine {
    count: number;
    page_info: {
        has_next_page: boolean;
        end_cursor: string;
    };
    edges: NodeEdgeFelixVideo[]
}

export interface NodeEdgeFelixVideo{
    node: NodeData
}

export interface InstaCallBack{
    data:{
        user: InstagramUser
    }
}