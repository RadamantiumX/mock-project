export type APIEpornerResponse = {
    count:       number;
    start:       number;
    per_page:    number;
    page:        number;
    time_ms:     number;
    total_count: number;
    total_pages: number;
    videos:      Video[];
}

export type Video = {
    id:            string;
    title:         string;
    keywords:      string;
    views:         number;
    rate:          string;
    url:           string;
    added:         Date;
    length_sec:    number;
    length_min:    string;
    embed:         string;
    default_thumb: Thumb;
    thumbs:        Thumb[];
}

export type Thumb = {
    size:   Size;
    width:  number;
    height: number;
    src:    string;
}

export enum Size {
    Big = "big",
}

