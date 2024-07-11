export type PicsPagePhub = {
    data:        Datum[];
    pages:       number;
    currentPage: number;
}

export type Datum = {
    title:   string;
    url:     string;
    rating:  string;
    preview: string;
}