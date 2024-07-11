export type PhubScrapingData = {
    data:   Datum[];
    paging: Paging;
}

export type Datum = {
    _id:      string;
    name:     string;
    url:      string;
    views:    string;
    videoNum: number;
    rank:     number;
    photo:    string;
    verified: boolean;
    awarded:  boolean;
}

export type Paging = {
    currentPage:  number;
    totalResults: number;
    totalPages:   number;
}


export type ModelInfoDetail = {
    name:       string;
    cover:      string;
    about:      string;
    avatar:     string;
    gender:     string;
    birthPlace: string;
    height:     string;
    weight:     string;
}
