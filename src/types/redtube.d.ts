export type ModelVideosRedTube = {
    response: Response[];
    length:   number;
}

export type Response = {
    title:         string;
    default_thumb: string;
    video_id:      string;
    duration:      string;
    views:         number;
    tags:          Tag[];
}

export type Tag = {
    tag_name: string;
}

