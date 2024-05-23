export type PhubScrapingData = {
    models: Models;
    count:  number;
}

export type Models = {
    data:   Datum[];
    paging: Paging;
}

export type Datum = {
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
    current: number;
    maxPage: number;
    isEnd:   boolean;
}
