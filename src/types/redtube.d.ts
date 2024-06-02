export type RedTubeAPIData = {
    videos: VideoElement[];
}

export type VideoElement = {
    video: VideoVideo;
}

export type VideoVideo = {
    duration:      string;
    views:         number;
    video_id:      string;
    rating:        string;
    ratings:       number;
    title:         string;
    url:           string;
    embed_url:     string;
    default_thumb: string;
    thumb:         string;
    publish_date:  Date;
    thumbs:        Thumb[];
    tags:          Tag[];
}

export type Tag = {
    tag_name: string;
}

export type Thumb = {
    size:   Size;
    width:  number;
    height: number;
    src:    string;
}

export enum Size {
    Big = "big",
    Medium = "medium",
    Medium1 = "medium1",
    Medium2 = "medium2",
    Small = "small",
}
